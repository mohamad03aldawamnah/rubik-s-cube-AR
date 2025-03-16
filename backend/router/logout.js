const express = require('express');
const router = express.Router();

// 退出 API
router.post('/', (req, res) => {
    res.json({ message: 'Logged out successfully' });
});

module.exports = router;