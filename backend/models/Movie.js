// models/movie.js

const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    releaseDate: {
        type: Date,
        default: Date.now,
    },
    // Add more fields as needed
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
