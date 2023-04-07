import './StyleSheets/BookCardsStyle.css';
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Tags from './Tags';

export default function BookCards({ bookList, deleteBook, API, getBooks }) {
    //declaring our variables and use States 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modalData, setModalData] = useState({});

    //destructuring the item/text input fields to be updated
    const [title, setTitle] = useState("");
    const [contributor, setContributor] = useState("");
    const [author, setAuthor] = useState("");
    const [date, setDate] = useState("");
    const [review, setReview] = useState("");


    const [id, setId] = useState("");
    const [tags, setTags] = useState([])

    const [editedBook, setEditedBook] = useState({
        title: "",
        contributor: "",
        author: "",
        date: "",
        review: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedBook((previousEntry) => {
            return { ...previousEntry, [name]: value }
        })
        console.log(editedBook.id);
    };

    //targets specified data and pushes the change to API - didn't get this done but dfoes work when hard-coded 
    const submitEditedBook = async () => {
        await fetch(
            API + "/" + id,
            {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(editedBook)
            }
        )
        console.log(bookList);
        clearForms();
        getBooks();
    }

    //clears the forms of text
    const clearForms = () => {
        setTitle("");
        setContributor("");
        setAuthor("");
        setDate("");
        setReview("");
    }

    console.log(bookList);

    return (
        //mapping over the booklist brought in as a prop and assigning each item name as book
        <div>
            {bookList.map((book, index) => (
                <div className="individual" key={index}>
                    <div className="cardHeaderInfo">
                        <span className="title"> {book.title} </span>
                        <p>{book.contributor}</p>
                    </div>

                    <p>Author: {book.author} </p>

                    <span> {book.date} </span>
                    <p> {book.review} </p>
                    <span className="options">


                        {/*   
                        <ul className="tag-line">
                            {book.tag.map((tag) => (
                                <li key={book.id}>
                                    <span> {tag}| </span>
                                </li>
                            ))}
                        </ul>  */}
                        {console.log(book.tag)}

                        <FaEdit data-bs-target="#form" size={20} className="click"
                            onClick={() => {
                                setModalData(book);
                                handleShow();
                                setId(book.id)
                            }} />
                        <FaTrash size={20} onClick={() => deleteBook(book.id)} className="click" />
                    </span>
                </div>
            ))}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Edit Entry </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label className="mp">Book Title </Form.Label>
                            <Form.Control
                                name="title"
                                type="text"
                                placeholder={modalData.title}
                                required
                                defaultValue={modalData.title}
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className="mp">Contributed By</Form.Label>
                            <Form.Control
                                name="contributor"
                                type="text"
                                placeholder="Your name"
                                required
                                defaultValue={modalData.contributor}
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className="mp">Author</Form.Label>
                            <Form.Control
                                name="author"
                                type="text"
                                placeholder="Author name"
                                defaultValue={modalData.author}
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>

                        <Form.Group controlId="mb-3">
                            <Form.Label className="mp"> Date Added</Form.Label>
                            <Form.Control
                                name="date"
                                type="date"
                                defaultValue={modalData.date}
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea">
                            <Form.Label className="mp extra"> Notes </Form.Label>
                            <Form.Control
                                name="review"
                                as="textarea"
                                cols={10}
                                rows={4}
                                defaultValue={modalData.review}
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>
                    </Form>
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
                            submitEditedBook();
                        }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </div >
    );
}

