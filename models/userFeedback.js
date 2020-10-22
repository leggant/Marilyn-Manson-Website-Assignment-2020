const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Feedback = mongoose.model('feedbackSubmission', feedbackSchema);
module.exports = Feedback;