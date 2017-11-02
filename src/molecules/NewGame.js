import React from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Modal from '../atoms/Modal';
import Overlay from '../atoms/Overlay';
import Card from '../atoms/Card';
import Heading from '../atoms/Heading';

const NewGame = ({ onCancel, onConfirm }) => [
    <Overlay key='overlay' />,
    <Modal key='modal'>
        <Card.Header>
            <Heading size='super'>
                New game
            </Heading>
        </Card.Header>
        
        <Card.Body>
            Current game will be lost.<br />
            Are you sure?
        </Card.Body>

        <Card.Footer>
            <Input.Group>
                <Button block onClick={onCancel}>
                    No
                </Button>
                <Button block colorType='error' onClick={onConfirm}>
                    Yes
                </Button>
            </Input.Group>
        </Card.Footer>
    </Modal>
];

export default NewGame;
