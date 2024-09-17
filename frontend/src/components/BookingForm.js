// frontend/src/components/BookingForm.js

import React, { useState } from 'react';

const BookingForm = ({ movies, onBookTickets }) => {
  const [selectedMovie, setSelectedMovie] = useState('');
  const [numTickets, setNumTickets] = useState(1);

  const handleMovieChange = (event) => {
    setSelectedMovie(event.target.value);
  };

  const handleNumTicketsChange = (event) => {
    setNumTickets(parseInt(event.target.value, 10));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedMovie && numTickets > 0) {
      onBookTickets(selectedMovie, numTickets);
    } else {
      alert('Please select a movie and enter a valid number of tickets.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select Movie:
        <select value={selectedMovie} onChange={handleMovieChange}>
          <option value="">Select a movie</option>
          {movies.map((movie) => (
            <option key={movie.id} value={movie.id}>
              {movie.title}
            </option>
          ))}
        </select>
      </label>
      <label>
        Number of Tickets:
        <input
          type="number"
          value={numTickets}
          onChange={handleNumTicketsChange}
          min="1"
          step="1"
        />
      </label>
      <button type="submit">Book Tickets</button>
    </form>
  );
};

export default BookingForm;
