const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    location:{
        city: String,
        country: String,
        longitude: String,
        latitude: String
    }
});

const User = module.exports = mongoose.model('user', UserSchema);