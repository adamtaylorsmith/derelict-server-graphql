const mongoose = require('mongoose');

const ArcherySchema = new mongoose.Schema({
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

module.exports = mongoose.model('Archery', ArcherySchema);