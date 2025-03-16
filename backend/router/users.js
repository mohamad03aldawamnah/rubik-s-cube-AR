const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ success: false, message: 'Token not provided, please log in' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret');
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: 'Invalid or expired token' });
    }
};

const adminMiddleware = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ success: false, message: 'Insufficient permissions, admin only' });
    }
    next();
};

router.get('/', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const users = await User.find({}, { username: 1, role: 1, _id: 1 });
        res.json({
            success: true,
            message: 'User data retrieved successfully',
            data: users
        });
    } catch (error) {
        console.error('Error retrieving user data:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
            ...(process.env.NODE_ENV === 'development' && { error: error.message })
        });
    }
});

router.delete('/:id', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.json({
            success: true,
            message: 'User deleted successfully',
            data: deletedUser
        });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
            ...(process.env.NODE_ENV === 'development' && { error: error.message })
        });
    }
});

module.exports = router;
