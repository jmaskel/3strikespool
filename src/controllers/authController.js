// controllers/authController.js
const User = require('../models/User');

const registerUser = async (req, res) => {
  try {
    // Create a new user instance
    const user = new User(req.body);
    // Save the user to the database
    await user.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { registerUser };
