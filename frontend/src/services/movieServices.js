// frontend/src/services/movieService.js

// Example function to fetch movies from backend
export const fetchMovies = async () => {
    try {
      const response = await fetch('/api/movies'); // Replace with your actual API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const movies = await response.json();
      return movies;
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error;
    }
  };
  
  // Example function to fetch movie details by ID
  export const fetchMovieById = async (movieId) => {
    try {
      const response = await fetch(`/api/movies/${movieId}`); // Replace with your actual API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch movie details');
      }
      const movie = await response.json();
      return movie;
    } catch (error) {
      console.error(`Error fetching movie with ID ${movieId}:`, error);
      throw error;
    }
  };
  