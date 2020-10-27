const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const preorderSchema = new Schema({
    option: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    edition: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    format: {
        type: String,
        required: true
    },
    releaseDate: {
        type: String,
        required: true
    },
    shipping: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }

}, { timestamps: true });

const PreorderModel = mongoose.model('preorders', preorderSchema);
module.exports = PreorderModel;