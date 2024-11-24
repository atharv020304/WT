import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';

const CataloguePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/api/books')
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/api/books') 
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  

  return (
    <div className="catalogue">
      <h2>Book Catalogue</h2>
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default CataloguePage;
