// controllers/userController.js

const User = require('../models/user');

// GET all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET a specific user by ID
exports.getUserById = async (req, res) => {
    res.json(res.user);
};

// CREATE a new user
exports.createUser = async (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        // Add more fields as needed
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// UPDATE a user
exports.updateUser = async (req, res) => {
    if (req.body.username != null) {
        res.user.username = req.body.username;
    }
    if (req.body.email != null) {
        res.user.email = req.body.email;
    }
    if (req.body.password != null) {
        res.user.password = req.body.password;
    }

    try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// DELETE a user
exports.deleteUser = async (req, res) => {
    try {
        await res.user.remove();
        res.json({ message: 'Deleted User' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Middleware function to find a user by ID
exports.findUserById = async (req, res, next, id) => {
    try {
        const user = await User.findById(id);
        if (user == null) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.user = user;
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    next();
};
