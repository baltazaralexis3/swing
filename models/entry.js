const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
    sleep: {type: Number},
    medication: {type: Boolean},
    prodFocus: {type: Number},
    crtvtyPassion: {type: Number},
    anxDistractedness: {type: Number},
    dullIndifference: {type: Number},
    energyLevel: {type: Number},
    sigEvents: [],
    moodRange: {
        low: {type: Number, min: 1, max:10},
        anchor: {type: Number, min: 1, max:10},
        high: {type: Number, min: 1, max:10},
    },
    patientComments: {type: String},
    doctorComments: {type: String},
}, {
    timestamps: true
})


module.exports = mongoose.model('Entry', entrySchema);