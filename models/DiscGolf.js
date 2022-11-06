const mongoose = require('mongoose');

const DiscGolfSchema = new mongoose.Schema({
    teamname: {
        type: String,
    },
    teamrole: {
        type: String,
    },
    score: {
        type: Number,
    },
    roundscore: {
        type: Number
    },
    place : {
        type: Number,
    }
});

module.exports = mongoose.model('DiscGolf', DiscGolfSchema);