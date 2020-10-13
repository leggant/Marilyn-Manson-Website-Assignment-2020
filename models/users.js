const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    country: {
        type: String
    },
    city: {
        type: String
    }
}, { timestamps: true });

const User = mongoose.model('user', userSchema);
module.exports = User;