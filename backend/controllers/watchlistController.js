const mongoose = require('mongoose');
const Watchlist = require('../dbWatchlist');

// Get watchlist
const getWatchlist = async (req, res) => {
    try {
        const allWatchlist = await Watchlist.find({}).sort({createdAt: -1});
        res.status(200).send(allWatchlist);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Create watchlist
const createWatchlist = async (req, res) => {
    const dbWatchlist = req.body;

    try {
        const newWatchlist = await Watchlist.create(dbWatchlist);
        res.status(201).send(newWatchlist);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Update watchlist
const updateWatchlist = async (req, res) => {
    const {id} = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`There is no watchlist item with the id of ${id}`);
        }
        const watchlistID = {_id: id};
        const update = {title: "Updated"};
        const updateWatchlist = await Watchlist.findOneAndUpdate(watchlistID, update);
        if (!updateWatchlist) {
            return res.status(404).send(`There is no watchlist item with the id of ${id}`);
        }
        res.status(200).send(updateWatchlist);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Delete watchlist
const deleteWatchlist = async (req, res) => {
    const {id} = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`There is no watchlist item with the id of ${id}`);
        }
        const deleteWatchlist = await Watchlist.findOneAndDelete({_id: id});
        res.status(200).send(deleteWatchlist);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getWatchlist, 
    createWatchlist, 
    updateWatchlist, 
    deleteWatchlist
};