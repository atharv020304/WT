const express = require('express');
const router = express.Router();
const db = require('../config/dbConfig'); // For MySQL
// const Book = require('../models/Book'); // Uncomment for MongoDB

// Get all books
router.get('/', (req, res) => {
  db.query('SELECT * FROM books', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Failed to fetch books' });
    } else {
      res.status(200).json(results);
    }
  });

  // For MongoDB:
  // Book.find({}, (err, books) => {
  //   if (err) res.status(500).json({ error: 'Failed to fetch books' });
  //   else res.status(200).json(books);
  // });
});

// Add a new book
router.post('/add', (req, res) => {
  const { title, author, description, price, image } = req.body;

  db.query(
    'INSERT INTO books (title, author, description, price, image) VALUES (?, ?, ?, ?, ?)',
    [title, author, description, price, image],
    (err, results) => {
      if (err) {
        res.status(500).json({ error: 'Failed to add book' });
      } else {
        res.status(201).json({ message: 'Book added successfully' });
      }
    }
  );

  // For MongoDB:
  // const book = new Book({ title, author, description, price, image });
  // book.save((err) => {
  //   if (err) res.status(500).json({ error: 'Failed to add book' });
  //   else res.status(201).json({ message: 'Book added successfully' });
  // });
});

// Get book by ID
router.get('/:id', (req, res) => {
  const bookId = req.params.id;

  db.query('SELECT * FROM books WHERE id = ?', [bookId], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Failed to fetch book' });
    } else {
      res.status(200).json(results[0]);
    }
  });

  // For MongoDB:
  // Book.findById(bookId, (err, book) => {
  //   if (err) res.status(500).json({ error: 'Failed to fetch book' });
  //   else res.status(200).json(book);
  // });
});

// Delete a book by ID
router.delete('/:id', (req, res) => {
  const bookId = req.params.id;

  db.query('DELETE FROM books WHERE id = ?', [bookId], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Failed to delete book' });
    } else {
      res.status(200).json({ message: 'Book deleted successfully' });
    }
  });

  // For MongoDB:
  // Book.findByIdAndDelete(bookId, (err) => {
  //   if (err) res.status(500).json({ error: 'Failed to delete book' });
  //   else res.status(200).json({ message: 'Book deleted successfully' });
  // });
});

module.exports = router;
