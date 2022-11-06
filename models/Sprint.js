const mongoose = require('mongoose');

const SprintSchema = new mongoose.Schema({
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
    },
    teamplace : {
        type: Number,
    }
});

module.exports = mongoose.model('Sprint', SprintSchema);