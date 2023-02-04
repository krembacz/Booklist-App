import './BookCardsStyle.css';
import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';

export default function BookCards({bookList}) {
    return (
        <div>
            {bookList.map((book) => (
            <div className="individual">
                <div className="cardHeaderInfo">
                    <span className="title"> </span>
                    <p>Nysha</p>
                </div>
                <p>Author: {book.name} </p>

                <span>12/20/2022 </span>
                <p> Placeholder Text </p>
                <span className="options">
                    <FaEdit data-bs-toggle="modal" data-bs-target="#form" size={20} />
                    <FaTrash size={20} />
                </span>
            </div>
            ))} 
        </div>
    );
}

/* <div className="individual">
<div className="cardHeaderInfo">
    <span className="title">The Glass Castle </span>
    <p>Nysha</p>
</div>
<p>Author: Jeanette Walls</p>

<span>12/20/2022 </span>
<p>Completed. I really loved the immersive storytelling. The story is furthered by the fact
    that it is a deeply personal and true story. A eye-opening perspective of rural Arizona in the
    1960-70's. </p>
<span class="options">
    <FaEdit data-bs-toggle="modal" data-bs-target="#form" size={20} />
    <FaTrash size={20} />
</span>
</div> */