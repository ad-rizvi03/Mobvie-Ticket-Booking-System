// src/pages/MovieDetailPage.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import movieService from '../services/movieService';

const MovieDetailPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const fetchedMovie = await movieService.getMovieById(id);
                setMovie(fetchedMovie);
            } catch (error) {
                console.error('Error fetching movie:', error);
            }
        };

        fetchMovie();
    }, [id]);

    return (
        <div>
            <h2>Movie Details</h2>
            {movie ? (
                <div>
                    <h3>{movie.title}</h3>
                    <p>{movie.description}</p>
                    <p>Duration: {movie.duration} minutes</p>
                    <p>Release Date: {new Date(movie.releaseDate).toLocaleDateString()}</p>
                    {/* Add more movie details */}
                </div>
            ) : (
                <p>Loading movie details...</p>
            )}
        </div>
    );
};

export default MovieDetailPage;
