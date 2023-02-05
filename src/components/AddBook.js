import './AddBookStyle.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPlusCircle } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';

//passed addBookClick function down as a prop from BookContext 
export default function AddBookButton({ addBookClick }) {

    //declaring our variables and use States 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //destructuring the item/text input fields to be updated
    const [title, setTitle] = useState("");
    const [contributor, setContributor] = useState("");
    const [author, setAuthor] = useState("");
    const [date, setDate] = useState("");
    const [review, setReview] = useState("");
    const API = "https://63dc7fa52308e3e319e89c0f.mockapi.io/books";

    //when submitted, creates an object called new book with specified attributes 
    const handleSubmit = () => {
        const newBook = { title, contributor, author, date, review };
        addBookClick(newBook);
        console.log(newBook);
        clearForms();
    }

    //clears the forms of text
    const clearForms = () => {
        setTitle("");
        setContributor("");
        setAuthor("");
        setDate("");
        setReview("");
    }

    //everything is in a modal that will pop up when a book is to be added 
    return (
        <div className="center">
            <Button id="new-book" onClick={handleShow}>
                <div>Add New book</div>
                <FaPlusCircle className="add" />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Form>
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
                            className="submit-btn"
                            variant="danger"
                            onClick={() => {
                                handleClose();
                                handleSubmit();
                            }}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div >
    );
}