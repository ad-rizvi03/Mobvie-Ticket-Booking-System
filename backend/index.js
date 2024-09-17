// index.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // If you want to enable CORS

const app = express();
const port = process.env.PORT || 3000; // Use environment port or 3000 as default

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS if needed
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/movieTicketBooking', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// API Routes
const moviesRouter = require('./routes/movieRoutes'); // Example route for movies
app.use('/api/movies', moviesRouter);

// Example route for health check
app.get('/', (req, res) => {
    res.send('Movie Ticket Booking System API is running');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
