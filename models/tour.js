const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tourSchema = new Schema({
    venue: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, { timestamps: true });

const Tour = mongoose.model('tourDate', tourSchema);
module.exports = Tour;