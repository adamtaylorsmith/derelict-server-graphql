const mongoose = require('mongoose');

const KayakSchema = new mongoose.Schema({
    teamname: {
        type: String,
    },
    // teamrole: {
    //     type: String,
    // },
    teamscore: {
        type: Number,
    },
    start: {
        type: Date,
    },
    finish: {
        type: Date,
    }
});

module.exports = mongoose.model('Kayak', KayakSchema);