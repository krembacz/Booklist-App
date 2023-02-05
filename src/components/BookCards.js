import './BookCardsStyle.css';
import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

export default function BookCards({ bookList, deleteBook }) {
    return (
        <div>
            {bookList.map((book) => (
                <div className="individual" key={book.id}>
                    <div className="cardHeaderInfo">
                        <span className="title"> {book.title} </span>
                        <p>{book.contributor}</p>
                    </div>

                    <p>Author: {book.author} </p>

                    <span> {book.date} </span>
                    <p> {book.review} </p>
                    <span className="options">
                        <FaEdit data-bs-toggle="modal" data-bs-target="#form" size={20} className="click" />
                        <FaTrash size={20} onClick={() => deleteBook(book.id)} className="click" />
                    </span>
                </div>
            ))}
        </div>
    );
}

