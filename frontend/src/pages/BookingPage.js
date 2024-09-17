// src/pages/BookingPage.js

import React, { useState } from 'react';
import bookingService from '../services/bookingService';

const BookingPage = () => {
    const [userId, setUserId] = useState('');
    const [movieId, setMovieId] = useState('');
    const [seatNumber, setSeatNumber] = useState('');

    const handleBooking = async (e) => {
        e.preventDefault();
        try {
            const newBooking = await bookingService.bookMovie(userId, movieId, seatNumber);
            console.log('New booking:', newBooking);
            // Handle successful booking (show confirmation, update UI, etc.)
        } catch (error) {
            console.error('Booking error:', error);
            // Handle booking error (show message, clear form, etc.)
        }
    };

    return (
        <div>
            <h2>Book a Movie</h2>
            <form onSubmit={handleBooking}>
                <label>
                    User ID:
                    <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
                </label>
                <br />
                <label>
                    Movie ID:
                    <input type="text" value={movieId} onChange={(e) => setMovieId(e.target.value)} />
                </label>
                <br />
                <label>
                    Seat Number:
                    <input type="text" value={seatNumber} onChange={(e) => setSeatNumber(e.target.value)} />
                </label>
                <br />
                <button type="submit">Book Now</button>
            </form>
        </div>
    );
};

export default BookingPage;
