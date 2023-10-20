const mongoose = require('mongoose');

const watchlistSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        episodeOn: {
            type: Number,
            required: true
        },
        episodeTotal: {
            type: Number,
            required: true
        },
        status: {
            type: String
        },
        score: {
            type: Number
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model('watchlist', watchlistSchema);

/*
title: "",
    episodeOn: "",
    episodeTotal: "",
    status: "",
    score: ""
    */