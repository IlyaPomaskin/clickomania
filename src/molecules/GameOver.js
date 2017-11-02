import React from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Modal from '../atoms/Modal';
import Overlay from '../atoms/Overlay';
import Card from '../atoms/Card';
import Heading from '../atoms/Heading';

class GameOver extends React.Component {
    state = {
        username: 'Anonymous'
    };

    handleChange = e => this.setState({
        username: e.target.value
    });

    handleSubmit = () => this.props.onConfirm(this.state.username);

    render() {
        return [
            <Overlay key='overlay' />,
            <Modal key='modal'>
                <Card.Header>
                    <Heading size='super'>
                        Game over
                    </Heading>
                </Card.Header>
                
                <Card.Body>
                    <p>Your score: {this.props.blocksCount}</p>

                    {false && <label className='c-label'>
                        Enter your name:
                        <Input value={this.state.username} onChange={this.handleChange} />
                    </label>}
                </Card.Body>

                <Card.Footer>
                    <Button block colorType='info' onClick={this.handleSubmit}>
                        OK
                    </Button>
                </Card.Footer>
            </Modal>
        ];
    }
}

export default GameOver;
