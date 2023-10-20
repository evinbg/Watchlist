const express = require('express');
const mongoose = require('mongoose');
const Cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const {
    getWatchlist, 
    createWatchlist, 
    updateWatchlist, 
    deleteWatchlist
} = require('./controllers/watchlistController')

// App config
const app = express();

const port = process.env.PORT || 8000;

const connectionURL = process.env.MONGO_URI

// Middleware
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(connectionURL)
.then( () => {
    app.listen(port, () => console.log(`Running on port ${port}`));
})
.catch((err) => {
    console.log(err);
});

// API endpoint
// Get
app.get('/watchlist', getWatchlist);

// Create
app.post('/watchlist', createWatchlist);

// Update
app.put('/watchlist/:id', updateWatchlist);

// Delete
app.delete('/watchlist/:id', deleteWatchlist);