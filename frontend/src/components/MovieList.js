// frontend/src/components/MovieList.js

import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>Director: {movie.director}</p>
            <p>Genre: {movie.genre}</p>
            <p>Released: {movie.releaseDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
