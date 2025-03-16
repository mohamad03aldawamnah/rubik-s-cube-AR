const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST /api/register - 注册普通用户
router.post('/', async (req, res) => {
    const { username, password } = req.body;

    if (!username?.trim() || !password?.trim()) {
        return res.status(400).json({
            success: false,
            message: 'Username and password cannot be empty',
            code: 'EMPTY_FIELD'
        });
    }

    if (username.trim().length < 3) {
        return res.status(400).json({
            success: false,
            message: 'Username must be at least 3 characters long',
            code: 'USERNAME_TOO_SHORT'
        });
    }

    if (password.trim().length < 6) {
        return res.status(400).json({
            success: false,
            message: 'Password must be at least 6 characters long',
            code: 'PASSWORD_TOO_SHORT'
        });
    }

    try {
        const existingUser = await User.findOne({ username: username.toLowerCase().trim() });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: 'Username is already taken',
                code: 'USER_EXISTS'
            });
        }

        const newUser = new User({
            username: username.trim(),
            password: password.trim(),
            role: 'user' // 默认普通用户
        });
        await newUser.save();

        res.status(201).json({
            success: true,
            message: 'Registration successful',
            data: { userId: newUser._id, username: newUser.username, role: newUser.role }
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            code: 'SERVER_ERROR',
            ...(process.env.NODE_ENV !== 'production' && { debug: error.message })
        });
    }
});

// POST /api/register/admin - 注册管理员用户（隐藏路由）
router.post('/admin', async (req, res) => {
    const { username, password, secret } = req.body;

    // 可选：添加密钥验证以增强安全性
    if (process.env.ADMIN_SECRET && secret !== process.env.ADMIN_SECRET) {
        return res.status(403).json({
            success: false,
            message: 'Invalid admin secret',
            code: 'INVALID_SECRET'
        });
    }

    if (!username?.trim() || !password?.trim()) {
        return res.status(400).json({
            success: false,
            message: 'Username and password cannot be empty',
            code: 'EMPTY_FIELD'
        });
    }

    try {
        const existingUser = await User.findOne({ username: username.toLowerCase().trim() });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: 'Username is already taken',
                code: 'USER_EXISTS'
            });
        }

        const newUser = new User({
            username: username.trim(),
            password: password.trim(),
            role: 'admin' // 设置为管理员角色
        });
        await newUser.save();

        res.status(201).json({
            success: true,
            message: 'Admin registration successful',
            data: { userId: newUser._id, username: newUser.username, role: newUser.role }
        });
    } catch (error) {
        console.error('Admin registration error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            code: 'SERVER_ERROR',
            ...(process.env.NODE_ENV !== 'production' && { debug: error.message })
        });
    }
});

module.exports = router;