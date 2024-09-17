// routes/bookings.js

const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');

// GET all bookings
router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET a specific booking
router.get('/:id', getBooking, (req, res) => {
    res.json(res.booking);
});

// CREATE a new booking
router.post('/', async (req, res) => {
    const booking = new Booking({
        user: req.body.user,
        movie: req.body.movie,
        seatNumber: req.body.seatNumber,
        // Add more fields as needed
    });

    try {
        const newBooking = await booking.save();
        res.status(201).json(newBooking);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// UPDATE a booking
router.patch('/:id', getBooking, async (req, res) => {
    if (req.body.user != null) {
        res.booking.user = req.body.user;
    }
    if (req.body.movie != null) {
        res.booking.movie = req.body.movie;
    }
    if (req.body.seatNumber != null) {
        res.booking.seatNumber = req.body.seatNumber;
    }

    try {
        const updatedBooking = await res.booking.save();
        res.json(updatedBooking);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE a booking
router.delete('/:id', getBooking, async (req, res) => {
    try {
        await res.booking.remove();
        res.json({ message: 'Deleted Booking' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware function to get single booking by ID
async function getBooking(req, res, next) {
    let booking;
    try {
        booking = await Booking.findById(req.params.id);
        if (booking == null) {
            return res.status(404).json({ message: 'Cannot find booking' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.booking = booking;
    next();
}

module.exports = router;
