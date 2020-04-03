const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutChallenge = new Schema({
    exercises: [{
        type: String,
        trim: true
    }]
});

const Challenge = mongoose.model('wochallenges', WorkoutChallenge);

module.exports = Challenge; 