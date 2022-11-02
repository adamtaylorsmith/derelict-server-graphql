const mongoose = require('mongoose');

const BasketballSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Basketball', BasketballSchema);