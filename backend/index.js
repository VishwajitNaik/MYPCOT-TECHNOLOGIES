const express = require('express');
const cors = require('cors'); // Import the cors package
const connectDB = require('./config/database');
const userRoutes = require('./routes/User'); // Import the user routes
const recordRoutes = require('./routes/recordRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Use the user routes
app.use('/api/users', userRoutes);

// Use the record routes
app.use('/api/records', recordRoutes);

// ... Other route imports and middleware

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
