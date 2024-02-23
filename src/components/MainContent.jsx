import { useEffect } from "react";
import { useState } from "react"
import "./MainContent.css"

const MainContent = ({ searchValue }) => {
  const [books, setBooks] = useState([])

  const fetchData = () => {
    fetch("https://reactnd-books-api.udacity.com/books", {
      headers: { Authorization: "whatever-you-want" },
    })
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.books);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="main-content">
      {filteredBooks.map((book) => (
        <div key={book.id} className="book-container">
          <div className="img-container">
            <div className="card">
              <img src={book.imageLinks.thumbnail} alt={book.title} />
              <div className="book-info">
                <h5>{book.title}</h5>
                {book.averageRating ? <h6>{book.averageRating}★</h6> : null}
                <p>*Free</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MainContent