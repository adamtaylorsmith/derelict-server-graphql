const mongoose = require('mongoose');

const KayakSchema = new mongoose.Schema({
    teamname: {
        type: String,
    },
    teamscore: {
        type: Number,
    },
    start: {
        type: Date,
    },
    finish: {
        type: Date,
    },
    teamplace : {
        type: Number,
    }
});

module.exports = mongoose.model('Kayak', KayakSchema);