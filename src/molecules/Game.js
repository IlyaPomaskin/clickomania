import React from 'react';
import Cell from '../atoms/Cell';
import * as h from '../helpers';

class Game extends React.PureComponent {
    handleCellClick = cell => {
        const nextField = h.removeCell(this.props.field, cell);

        if (this.props.field === nextField) {
            return;
        }

        if (!h.hasMovements(nextField)) {
            this.props.onGameOver(nextField);
        }

        this.props.onMove(nextField);
    };

    render() {
        return <div className='game'>
            {this.props.field.map((col, y) => <div className='col' key={y}>
                {col.map((color, x) => <Cell
                    onClick={() => this.handleCellClick([y, x, color])}
                    color={color}
                    key={`${y}-${x}`}
                />)}
            </div>)}
        </div>;
    }
}

export default Game;
