require('dotenv').config(); // Load environment variables from .env
const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds instead of connectTimeoutMS
};

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, options);
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
