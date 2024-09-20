const express = require('express');
const router = express.Router();
const Admin = require('./Admin');

// Route to add an admin
router.post('/add', async (req, res) => {
    const { name, email, password } = req.body;
    const newAdmin = new Admin({ name, email, password });

    try {
        await newAdmin.save();
        res.status(201).send('Admin added successfully');
    } catch (error) {
        res.status(400).send('Error adding admin: ' + error.message);
    }
});
// Admin Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await Admin.findOne({ email });

        if (!admin) {
            return res.status(400).json({ message: 'Admin not found' });
        }

        // You would normally hash and compare passwords here
        if (admin.password !== password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful', admin });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;
