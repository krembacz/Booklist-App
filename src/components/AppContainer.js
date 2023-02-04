import React, { useState } from 'react';
import './AppContainerStyle.css'
import AddBookButton from './AddBook';
import BookCards from './BookCards';

export default function AppContainer() {
    return (
        <div className="app-bg">
            <div className="app">
                <h2> My Books </h2>
                <AddBookButton />
                <BookCards />
            </div>
        </div>
    );
}
