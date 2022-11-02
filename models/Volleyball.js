const mongoose = require('mongoose');

const VolleyballSchema = new mongoose.Schema({
    teamname: {
        type: Integer,
    },
    // teamrole: {
    //     type: Integer,
    // },
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

});

module.exports = mongoose.model('Volleyball', VolleyballSchema);