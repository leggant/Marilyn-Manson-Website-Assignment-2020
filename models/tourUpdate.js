const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const updateSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, { timestamps: true });

const User = mongoose.model('tourUpdate', updateSchema);
module.exports = User;