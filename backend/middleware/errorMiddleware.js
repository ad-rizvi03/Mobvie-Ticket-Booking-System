// middleware/errorMiddleware.js

// Middleware for handling errors
exports.errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
};
