const mongoose = require('mongoose');

const PickleballSchema = new mongoose.Schema({
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

});

module.exports = mongoose.model('Pickleball', PickleballSchema);