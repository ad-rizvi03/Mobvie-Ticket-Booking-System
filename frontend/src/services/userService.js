// frontend/src/services/userService.js

// Example function to authenticate user
export const authenticateUser = async (username, password) => {
    try {
      const response = await fetch('/api/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        throw new Error('Authentication failed');
      }
      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error('Error authenticating user:', error);
      throw error;
    }
  };
  
  // Example function to fetch user profile
  export const fetchUserProfile = async (userId) => {
    try {
      const response = await fetch(`/api/users/${userId}`); // Replace with your actual API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch user profile');
      }
      const userProfile = await response.json();
      return userProfile;
    } catch (error) {
      console.error(`Error fetching user profile for ID ${userId}:`, error);
      throw error;
    }
  };
  