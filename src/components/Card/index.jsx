import React from "react";

import "./Card.css";
function Card({ book }) {
  return (
    <div className="card">
      <div className="card-wrapper">
        {book.map((book, index) => (
          <li key={index}>
            <div className="image">
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="book" />
            </div>
           
            <div className="book-details">
              <h1 className="title">{book.volumeInfo.title}</h1>
              <h3 className="sub-title">{book.volumeInfo.subtitle}</h3>
              <h2 className="author">{book.volumeInfo.authors}</h2>
              <h4 className="pub-date">{book.volumeInfo.publishedDate}</h4>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Card;
