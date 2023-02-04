import './AddBookStyle.css';
import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPlusCircle } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';

export default function AddBookButton() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="center">
            <Button id="new-book" onClick={handleShow}>
                <div>Add New book</div>
                <FaPlusCircle className="add" />
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Add New Book </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>

                        <Form.Group className="mb-3" controlId="formTitleInpus">
                            <Form.Label className="mp">Book Title </Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="usernameInput">
                            <Form.Label className="mp">Contributed By</Form.Label>
                            <Form.Control type="username" placeholder="Your name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formAuthorInput">
                            <Form.Label className="mp">Author</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group controlId="mb-3">
                            <Form.Label className="mp"> Date Added</Form.Label>
                            <Form.Control type="date" name="formDateAddedInput" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea">
                            <Form.Label className="mp extra"> Notes </Form.Label>
                            <Form.Control as="textarea" cols={10} rows={4} />
                        </Form.Group>

                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
}