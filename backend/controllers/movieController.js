// controllers/movieController.js

const Movie = require('../models/movie');

// GET all movies
exports.getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET a specific movie by ID
exports.getMovieById = async (req, res) => {
    res.json(res.movie);
};

// CREATE a new movie
exports.createMovie = async (req, res) => {
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
};

// UPDATE a movie
exports.updateMovie = async (req, res) => {
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
};

// DELETE a movie
exports.deleteMovie = async (req, res) => {
    try {
        await res.movie.remove();
        res.json({ message: 'Deleted Movie' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Middleware function to find a movie by ID
exports.findMovieById = async (req, res, next, id) => {
    try {
        const movie = await Movie.findById(id);
        if (movie == null) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.movie = movie;
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    next();
};
