import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const AddTodo = ({ addTodo, currentTodo, updateTodo }) => {
    const [show, setShow] = useState(false);
    const [item, setItem] = useState("");

    // Show modal if there is a currentTodo to edit
    useEffect(() => {
        if (currentTodo) {
            setItem(currentTodo);
            setShow(true);
        }
    }, [currentTodo]);

    const handleClose = () => {
        setShow(false);
        setItem("");
    };

    const handleShow = () => setShow(true);

    const handleTodoName = (e) => {
        setItem(e.target.value);
    };

    const handleSave = () => {
        if (currentTodo) {
            updateTodo(item);  // Pass the updated item string
        } else {
            addTodo(item);  // Directly add the todo string
        }
        handleClose();
    };

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Add Todo
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{currentTodo ? "Update Todo" : "Add Todo"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>Todo Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Todo"
                        value={item}
                        onChange={handleTodoName}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        {currentTodo ? "Update Changes" : "Save Changes"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddTodo;
