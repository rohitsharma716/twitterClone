const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// Save user data
app.post('/api/users', async (req, res) => {
    try {
        const userData = req.body;
        
        // Create new user
        const newUser = new User(userData);
        await newUser.save();
        
        // Remove password from response
        const userResponse = newUser.toObject();
        delete userResponse.password;
        
        res.status(201).json({
            message: 'User data saved successfully',
            user: userResponse
        });
    } catch (error) {
        console.error('Error saving user data:', error);
        
        // Handle duplicate email error
        if (error.code === 11000) {
            return res.status(400).json({ 
                error: 'Email already exists' 
            });
        }
        
        res.status(500).json({ 
            error: 'Failed to save user data' 
        });
    }
});

// get user at home page
app.get('/', async (req, res) => {
    res.send('Welcome to the Twitter Clone API');
});

// Get all users
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find({}, '-password'); // Exclude password field
        res.json(users);
    } catch (error) {
        console.error('Error reading user data:', error);
        res.status(500).json({ 
            error: 'Failed to read user data' 
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}); 