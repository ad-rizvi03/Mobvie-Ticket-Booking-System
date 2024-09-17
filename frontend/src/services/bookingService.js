// frontend/src/services/bookingService.js

// Example function to book tickets
export const bookTickets = async (userId, movieId, numTickets) => {
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, movieId, numTickets }),
      });
      if (!response.ok) {
        throw new Error('Booking failed');
      }
      const bookingDetails = await response.json();
      return bookingDetails;
    } catch (error) {
      console.error('Error booking tickets:', error);
      throw error;
    }
  };
  
  // Example function to fetch bookings for a user
  export const fetchUserBookings = async (userId) => {
    try {
      const response = await fetch(`/api/users/${userId}/bookings`); // Replace with your actual API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch user bookings');
      }
      const userBookings = await response.json();
      return userBookings;
    } catch (error) {
      console.error(`Error fetching bookings for user ID ${userId}:`, error);
      throw error;
    }
  };
  