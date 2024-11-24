const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../config/dbConfig'); // Database connection

// Register user
router.post('/register', async (req, res) => {
  console.log('Request Body:', req.body);  // Debugging line

  const { username, email, password } = req.body;

  // Check for missing fields
  if (!username || !email || !password) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required.',
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword],
      (err, result) => {
        if (err) {
          return res.status(500).json({ success: false, message: 'Database error.' });
        }
        res.status(200).json({ success: true, message: 'User registered successfully.' });
      }
    );
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

// Login user
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).json({ success: false });

    if (results.length && await bcrypt.compare(password, results[0].password)) {
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false });
    }
  });
});

module.exports = router;
