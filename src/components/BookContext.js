import { useEffect, useState } from 'react';
//save https://63dc8ec0367aa5a7a4fddf12.mockapi.io/students?fbclid=IwAR3VXtalCJlzPDyoGAa-lRzK3bS1ye76UIQ9REIkBU57zoPrEwgUMipA_hY
import BookCards from './BookCards';
import AddBookButton from './AddBook';

export default function BookContext() {
    const [bookList, setBookList] = useState([]);
    const API = "https://63dc7fa52308e3e319e89c0f.mockapi.io/books";

    //fetches the API data, sets the state to API data and console logs success 
    useEffect(() => {
        const reFreshInfo = async () => {
            const response = await fetch(API);
            const data = await response.json();
            setBookList(data);
            await console.log(bookList);
        }
        reFreshInfo();
    }, []);


    const getBooks = async () => {
        const response = await fetch(API);
        const data = await response.json();
        setBookList(data);
        await console.log(bookList)
    };

    //fetches API data of single entry/item by id
    const onReadOneClick = async () => {
        const response = await fetch(API + "/4")
        const data = await response.json();
        await console.log(data);
    };

    //onclick, creates new object with input data and sets it into state and API 

    const addBookClick = async (newBook) => {
/*         const newBook = {
            title: "Harry Potter",
            contributor: "Jovan",
            author: "JK Rowling",
            date: "2/4/2023",
            review: "Pretty magical"
        } */

        await setBookList(bookList.concat(newBook))
        await fetch(API, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(newBook)
        })
        await console.log(bookList);
    };


    //targets specified data and pushes the change to API 
    const editBook = async () => {
        const changedBook = {
            title: "The Diary of Anne Frank",
            contributor: "Kristina",
            author: "Anne Frank",
            date: "2/4/23",
            review: "Sombering and vivid"
        }

        const resourceID = 3;
        await fetch(API + "/" + resourceID, {
            method: "PUT",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(changedBook)
        })
        await console.log(bookList);
        getBooks();
    };


    //determines item by id and deletes from API 
    const deleteBook = async (id) => {
        const resourceID = (id);
        const response = await fetch(
            API + "/" + resourceID,
            { method: "DELETE" }
        )
        await console.log("Book has been deleted");
        getBooks();
    };

    console.log(bookList);

    return (
        <div>
            <AddBookButton addBookClick={addBookClick} />
            <BookCards bookList={bookList} deleteBook={deleteBook} />
        </div>
    );
}
/*
<button onClick={onCreateClick} className="btn btn-info"> BOOKS </button>
<button onClick={onReadOneClick} className="btn btn-success">GET </button>
<button onClick={updateBook} className="btn btn-warning">UPDATE </button>
<button onClick={deleteBook} className="btn btn-danger">DELETE </button> */

//<AddBookButton />

/*     useEffect(() => {
        getBooks()
    }, [])

    function getBooks() {
        fetch(API)
            .then((data) => data.json())
            .then((data) => {
                setBookList(data)
                console.log(data);
                setLoading(false);
            });
    }; */
/* 
    if (isLoading) {
        return <div> Loading... </div>
    } */

/*    const onCreateClick = () => {
       const newBook = {
           title: "East of Eden",
           author: "John Steinbeck",
           date: "2/3/23",
           Review: "Solid Book"
       }

       setBookList(bookList.concat(newBook))
       fetch(API, {
           method: "POST",
           headers: { "Content-type": "application/json" },
           body: JSON.stringify(newBook)
       })
       console.log(bookList);
   } */