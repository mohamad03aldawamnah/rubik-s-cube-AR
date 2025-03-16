const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
    const { username, password } = req.body;

    try {
        // 验证输入
        if (!username?.trim() || !password?.trim()) {
            return res.status(400).json({ success: false, message: 'Username and password are required' });
        }

        // 查找用户
        const user = await User.findOne({ username: username.trim() });
        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid username or password' });
        }

        // 验证密码
        const isMatch = await user.matchPassword(password.trim());
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid username or password' });
        }

        // 生成 JWT，包含用户 ID、用户名和角色
        const token = jwt.sign(
            { userId: user._id, username: user.username, role: user.role },
            process.env.JWT_SECRET || 'your_jwt_secret',
            { expiresIn: '1h' }
        );

        // 成功响应
        res.json({
            success: true,
            message: 'Login successful',
            data: {
                token,
                user: { id: user._id, username: user.username, role: user.role }
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: process.env.NODE_ENV === 'development' ? error.message : null
        });
    }
});

module.exports = router;