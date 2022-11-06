const mongoose = require('mongoose');

const BowlingSchema = new mongoose.Schema({
    teamname: {
        type: String,
    },
    teamrole: {
        type: String,
    },
    pins: {
        type: Number,
    },
    teamscore: {
        type: Number,
    },
    teamplace : {
        type: Number,
    }
});

module.exports = mongoose.model('Bowling', BowlingSchema);