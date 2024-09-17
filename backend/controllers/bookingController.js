// controllers/bookingController.js

const Booking = require('../models/booking');

// GET all bookings
exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET a specific booking by ID
exports.getBookingById = async (req, res) => {
    res.json(res.booking);
};

// CREATE a new booking
exports.createBooking = async (req, res) => {
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
};

// UPDATE a booking
exports.updateBooking = async (req, res) => {
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
};

// DELETE a booking
exports.deleteBooking = async (req, res) => {
    try {
        await res.booking.remove();
        res.json({ message: 'Deleted Booking' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Middleware function to find a booking by ID
exports.findBookingById = async (req, res, next, id) => {
    try {
        const booking = await Booking.findById(id);
        if (booking == null) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.booking = booking;
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    next();
};
