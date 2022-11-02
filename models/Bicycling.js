const mongoose = require('mongoose');

const BicyclingSchema = new mongoose.Schema({
    teamname: {
        type: String,
    },
    teamrole: {
        type: String,
    },
    score: {
        type: Number,
    },
    start: {
        type: Date,
    },
    finish: {
        type: Date,
    },
});

module.exports = mongoose.model('Bicycling', BicyclingSchema);