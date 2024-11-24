const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// CORS configuration
app.use(cors({
  origin: 'http://localhost:3000',  // Adjust the frontend URL if needed
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true // If you are using cookies or other credentials
}));

// Define routes
app.use('/api/auth', authRoutes);  // Auth routes for registration and login
app.use('/api/books', bookRoutes); // Book routes for catalogue or other operations

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
