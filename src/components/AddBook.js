import './AddBookStyle.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPlusCircle } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';

export default function AddBookButton({ addBookClick }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title, setTitle] = useState("");
    const [contributor, setContributor] = useState("");
    const [author, setAuthor] = useState("");
    const [date, setDate] = useState("");
    const [review, setReview] = useState("");
    const API = "https://63dc7fa52308e3e319e89c0f.mockapi.io/books";

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { title, contributor, author, date, review };
        addBookClick(newBook);
    }

    return (
        <div className="center">
            <Button id="new-book" onClick={handleShow}>
                <div>Add New book</div>
                <FaPlusCircle className="add" />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Form onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title> Add New Book </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>


                        <Form.Group className="mb-3" controlId="formTitleInpus">
                            <Form.Label className="mp">Book Title </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter book title"
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />


                        </Form.Group>

                        <Form.Group className="mb-3" controlId="usernameInput">
                            <Form.Label className="mp">Contributed By</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Your name"
                                required
                                value={contributor}
                                onChange={(e) => setContributor(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formAuthorInput">
                            <Form.Label className="mp">Author</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Author name"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="mb-3">
                            <Form.Label className="mp"> Date Added</Form.Label>
                            <Form.Control
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea">
                            <Form.Label className="mp extra"> Notes </Form.Label>
                            <Form.Control
                                as="textarea"
                                cols={10}
                                rows={4}
                                value={review}
                                onChange={(e) => setReview(e.target.value)} />
                        </Form.Group>


                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => {
                            handleClose();
                        }}>
                            Close
                        </Button>
                        <Button
                            variant="primary"
                            onClick={() => {
                                handleClose();
                                //addBookClick();
                            }}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div >
    );
}

//<Form onSubmit={handleSubmit}></Form>

/* { <Button id="new-book" onClick={handleShow}>
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
    <Button variant="primary" onClick={() => {
        handleClose();
        onCreateClick();
    }}>
        Save Changes
    </Button>
</Modal.Footer>
</Modal> }*/