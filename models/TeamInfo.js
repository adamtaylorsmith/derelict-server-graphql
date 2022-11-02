const mongoose = require('mongoose');

const TeamInfoSchema = new mongoose.Schema({
    teamname: {
        type: String,
    },
    captain: {
        type: String,
    },
    ringer: {
        type: String,
    },
    nonmale: {
        type: String,
    },
    derelict: {
        type: String,
    },
});

module.exports = mongoose.model('TeamInfo', TeamInfoSchema);