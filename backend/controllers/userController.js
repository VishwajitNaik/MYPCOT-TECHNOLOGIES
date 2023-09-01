const User = require("../models/user");

// User Registration
const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, gender } = req.body;

    // Check if the email already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Create a new user instance
    const newUser = new User({
      name,
      email,
      password, // In a real application, hash the password before saving
      gender,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


// User Login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email }); 

    // Check if the user exists
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // In a real application, you would compare hashed passwords
    // For this example, we'll keep it simple
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Successful login
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


module.exports = {
  registerUser,
  loginUser
  // Other user-related controllers here
};
