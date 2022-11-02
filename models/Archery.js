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
    arrowone: {
        type: Number,
    },
    arrowtwo: {
        type: Number,
    },
    arrowthree: {
        type: Number,
    },
    arrowfour: {
        type: Number,
    },
    arrowfive: {
        type: Number,
    },
    arrowsix: {
        type: Number,
    },
    arrowseven: {
        type: Number,
    },
    arroweight: {
        type: Number,
    },
    arrownine: {
        type: Number,
    },
    arrowten: {
        type: Number,
    },
});

module.exports = mongoose.model('Archery', ArcherySchema);