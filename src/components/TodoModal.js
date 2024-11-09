import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const TodoModal = ({ show, handleClose, handleSave, currentTodo }) => {
    const [toDoName, setTodoName] = useState("");

    useEffect(() => {
        if (currentTodo) {
            setTodoName(currentTodo.toDoName);  // Set the todo name if we are updating
        } else {
            setTodoName("");  // Clear the input when adding a new todo
        }
    }, [currentTodo]);

    const handleTodoName = (e) => {
        setTodoName(e.target.value);
    };

    const handleSaveTodo = () => {
        handleSave({ toDoName });
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{currentTodo ? "Update Todo" : "Add Todo"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label>Todo Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Todo" value={toDoName} onChange={handleTodoName} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSaveTodo}>
                    {currentTodo ? "Update Changes" : "Save Changes"}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default TodoModal;
