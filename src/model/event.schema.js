const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
let trekEvent = new Schema({
    name: String,
    short_description: String,
    description: String,
    gPlaceId: String,
    photo: String,
    repeats: {
        d_date: Date,
        d_time: Date,
        a_date: Date,
        a_time: Date,
        e_type: String,
        limit: Number,
        price_head: Number,
        thingsToCarry: String,
        camping: Boolean,
        oxygen: Boolean,
        timeToTrekUp: Number,
        timeToTrekDown: Number,
        drone: Boolean,
        camera: Boolean,
        totalGuides: Number,
        waterStreams: Number,
        participants: {
            triedRegistering: [],
            registered: [],
            cRated: Number,
        }
    },
    tAndC: String,
    cancellation: String,
    refund: String,
    costIncludes: String,
    distanceToPlace: Number,
    trekTotalDistance: Number,
    altitude: Number,
    difficulty: String,
    exhaust: String,
});
module.exports = mongoose.model('trekEvent', trekEvent);
