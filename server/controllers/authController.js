const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.signup = async (req, res) => {
    try {
        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        res.status(400).json({ error: "Email already exists or invalid data" });
    }
};

exports.login = async (req, res) => {
    // Logic to verify email and password comparison will go here
    res.json({ message: "Login logic triggered" });
};