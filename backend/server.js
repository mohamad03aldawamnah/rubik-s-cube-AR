const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

// 加载环境变量
dotenv.config();

// 环境变量验证
const requiredEnvVars = ['JWT_SECRET'];
requiredEnvVars.forEach(varName => {
    if (!process.env[varName] && process.env.NODE_ENV === 'production') {
        throw new Error(`Missing required environment variable: ${varName}`);
    }
});

const app = express();
const PORT = process.env.PORT || 8000;

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/cube-user-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection failed:', err));

// Middleware configuration
app.use(express.json());
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Mount routes
app.use('/api/register', require('./router/register'));
app.use('/api/login', require('./router/login'));
app.use('/api/users', require('./router/users'));
app.use('/api/scan', require('./router/scanner-solver'));

// HelloWorld
app.get('/', (req, res) => {
    res.send('Connection Successful!');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Global Error:', err.stack);
    res.status(500).json({
        message: 'Server encountered an error',
        error: process.env.NODE_ENV === 'development' ? err.message : null
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
});
