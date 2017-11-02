import React from 'react';
import * as R from 'ramda';
import Button from './atoms/Button';
import Game from './molecules/Game';
import GameOver from './molecules/GameOver';
import NewGame from './molecules/NewGame';
import Score from './molecules/Score';
import * as h from './helpers';

import './blaze.css';
import './app.css';

const LS_FIELD_HISTORY = 'fieldHistory';
const MODAL_NEW_GAME = Symbol('newGame');
const MODAL_GAME_OVER = Symbol('gameOver');
const MODAL_SCORE = Symbol('score');

const getModal = R.cond([
    [R.equals(MODAL_NEW_GAME), R.always(NewGame)],
    [R.equals(MODAL_GAME_OVER), R.always(GameOver)],
    [R.equals(MODAL_SCORE), R.always(Score)]
]);

class App extends React.Component {
    state = {
        gameOver: false,
        modal: null,
        modalProps: {},
        fieldHistory: [],
    };

    componentWillMount() {
        const fieldHistory = JSON.parse(localStorage.getItem(LS_FIELD_HISTORY));

        if (fieldHistory) {
            this.setState({ fieldHistory });
        } else {
            this.newGame();
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if (this.state.fieldHistory !== nextState.fieldHistory) {
            localStorage.setItem(LS_FIELD_HISTORY, JSON.stringify(nextState.fieldHistory));
        }
    }

    handleNewGame = () => {
        if (this.state.gameOver || this.state.fieldHistory.length === 1) {
            this.newGame();
            return;
        }

        this.setState({
            modal: MODAL_NEW_GAME,
            modalProps: {
                onCancel: () => this.setState({ modal: null }),
                onConfirm: () => this.setState({ modal: null }, this.newGame)
            }
        });
    };

    handleUndo = () => {
        if (this.state.fieldHistory.length === 1) {
            return;
        }

        this.setState({
            fieldHistory: R.dropLast(1, this.state.fieldHistory)
        });
    };

    handleMove = field => this.setState({
        fieldHistory: R.append(field, this.state.fieldHistory)
    });

    handleGameOver = field => this.setState({
        gameOver: true,
        modal: MODAL_GAME_OVER,
        modalProps: {
            score: h.getScore(R.head(this.state.fieldHistory), field),
            onConfirm: username => this.setState({ modal: null }) 
        }
    });

    newGame = () => this.setState({
        gameOver: false,
        fieldHistory: [h.generateNewField(Date.now())]
    });

    render() {
        const Modal = getModal(this.state.modal);

        return <div className='c-text o-container container'>
            <div className='toolbar'>
                <Button ghost size='small' onClick={this.handleNewGame}>
                    New game
                </Button>
                {false && <Button size='small' onClick={this.handleScore}>
                    Score
                </Button>}
                <Button ghost size='small' disabled={this.state.fieldHistory.length === 1} onClick={this.handleUndo}>
                    Undo
                </Button>
            </div>

            <Game
                field={R.last(this.state.fieldHistory)}
                onGameOver={this.handleGameOver}
                onMove={this.handleMove}
            />

            {this.state.modal && <Modal {...this.state.modalProps} />}
        </div>;
    }
}

export default App;
