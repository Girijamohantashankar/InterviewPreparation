const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Load environmental variables
require('dotenv').config();

const mongoose = require('mongoose');
const { mongoUrl } = require('./keys');
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.json());

// Routes
require('./models/model');
require('./models/post');
app.use(require('./routes/auth'));
app.use(require('./routes/createPost'));
app.use(require('./routes/user'));

// MongoDB connection
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log('Successfully connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

// Serve static files
app.use(express.static(path.join(__dirname, "./frontend/build")));

// Handle routes for SPA
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./frontend/build/index.html"), (err) => {
        if (err) {
            console.error('Error sending index.html:', err);
            res.status(500).send(err);
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});
