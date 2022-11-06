const mongoose = require('mongoose');

const CornholeSchema = new mongoose.Schema({
    teamname: {
        type: String,
    },
    teamrole: {
        type: String,
    },
    score: {
        type: Number,
    },
    roundonescore: {
        type: Number,
    },
    roundtwoscore: {
        type: Number,
    },
    roundthreescore: {
        type: Number,
    },
    roundfourscore: {
        type: Number,
    },
    roundfivescore: {
        type: Number,
    },
    roundsixscore: {
        type: Number,
    },
    place : {
        type: Number,
    }
});

module.exports = mongoose.model('Cornhole', CornholeSchema);