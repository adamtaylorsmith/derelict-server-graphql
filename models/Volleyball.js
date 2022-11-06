const mongoose = require('mongoose');

const VolleyballSchema = new mongoose.Schema({
    teamname: {
        type: String,
    },
    teamscore: {
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
    teamplace : {
        type: Number,
    }
});

module.exports = mongoose.model('Volleyball', VolleyballSchema);