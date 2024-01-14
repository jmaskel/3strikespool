const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

// Replace with your MongoDB URI
const mongoDBUri = 'your-mongodb-uri';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect(mongoDBUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Use authentication routes
app.use('/api/auth', authRoutes);

// Basic route for testing the server
app.get('/', (req, res) => {
    res.send('Welcome to the Football Pickem App!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
