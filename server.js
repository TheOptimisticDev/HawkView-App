const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like index.html)
app.use(express.static(path.join(__dirname, 'public')));

// Define route for handling location data
app.post('/location', async (req, res) => {
    const { latitude, longitude } = req.body;
    // Placeholder response for testing
    res.json({ temperature: 25, description: 'Sunny' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});