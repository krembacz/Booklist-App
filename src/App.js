import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import AppContainer from './components/AppContainer';
import BookContext from './components/BookContext';
//save https://63dc8ec0367aa5a7a4fddf12.mockapi.io/students?fbclid=IwAR3VXtalCJlzPDyoGAa-lRzK3bS1ye76UIQ9REIkBU57zoPrEwgUMipA_hY

export default function App() {
  const [bookList, setBookList] = useState({});
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const API = "https://63dc7fa52308e3e319e89c0f.mockapi.io/books";

  //fetches the API data, sets the state to API data and console logs success 
  useEffect(() => {
    const reFreshInfo = async () => {
      const response = await fetch(API);
      const data = await response.json();
      setBookList(data);
      await console.log(data);
    }
    reFreshInfo();
  }, []);

  //fetches API data of single entry/item by id
  const onReadOneClick = async () => {
    const response = await fetch(API + "/4")
    const data = await response.json();
    await console.log(data);
  }


  //onclick, creates new object with input data and sets it into state and API 
  const onCreateClick = () => {
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
  }

  const updateBook = async () => {
    const changedBook = {
      title: "The Glass Castle",
      author: "Jeanette Walls",
      date: "2/4/23",
      review: "Riveting book"
    }

    const resourceID = 3;
    await fetch(API + "/" + resourceID, {
      method: "PUT",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(changedBook)
    })
    await console.log(bookList);
  }

  const deleteBook = async () => {
    const resourceID = 4;
    const response = await fetch(
      API + "/" + resourceID,
      { method: "DELETE" }
    )
    await console.log("Book has been deleted");
  }

  return (
    <div className="App">
      <AppContainer />
      <BookContext />
    </div>
  );
}
