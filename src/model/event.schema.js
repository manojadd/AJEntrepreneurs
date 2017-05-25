const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
let trekEvent = new Schema({
    name: String,
    description: String,
    geo_coordinates: [Number],
    date: Date,
    limit:Number,
    days_duration:Number,
});
module.exports = mongoose.model('trekEvent', trekEvent);
