import React from 'react';
import './AppContainerStyle.css'
import BookContext from './BookContext';

export default function AppContainer() {
    return (
        <div className="app-bg">
            <div className="app">
                <h2> My Books </h2>
                <BookContext />
            </div>
        </div>
    );
}
