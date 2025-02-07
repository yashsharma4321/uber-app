const express = require('express');

const app = express();
const dotenv = require('dotenv');

const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

// Enable CORS for all domains
app.use(cors());

// Define a route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Export the app
module.exports = app;
