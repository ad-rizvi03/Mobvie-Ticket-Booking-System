// routes/movies.js

const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

// GET all movies
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET a specific movie
router.get('/:id', getMovie, (req, res) => {
    res.json(res.movie);
});

// CREATE a new movie
router.post('/', async (req, res) => {
    const movie = new Movie({
        title: req.body.title,
        description: req.body.description,
        duration: req.body.duration,
        releaseDate: req.body.releaseDate,
        // Add more fields as needed
    });

    try {
        const newMovie = await movie.save();
        res.status(201).json(newMovie);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// UPDATE a movie
router.patch('/:id', getMovie, async (req, res) => {
    if (req.body.title != null) {
        res.movie.title = req.body.title;
    }
    if (req.body.description != null) {
        res.movie.description = req.body.description;
    }
    if (req.body.duration != null) {
        res.movie.duration = req.body.duration;
    }
    if (req.body.releaseDate != null) {
        res.movie.releaseDate = req.body.releaseDate;
    }

    try {
        const updatedMovie = await res.movie.save();
        res.json(updatedMovie);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE a movie
router.delete('/:id', getMovie, async (req, res) => {
    try {
        await res.movie.remove();
        res.json({ message: 'Deleted Movie' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware function to get single movie by ID
async function getMovie(req, res, next) {
    let movie;
    try {
        movie = await Movie.findById(req.params.id);
        if (movie == null) {
            return res.status(404).json({ message: 'Cannot find movie' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.movie = movie;
    next();
}

module.exports = router;
