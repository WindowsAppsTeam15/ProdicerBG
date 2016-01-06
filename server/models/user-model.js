'use strict';

let mongoose = require('mongoose');

// Defining user schema - similar as EF code first for db entry
let userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        required: true
    }
});

mongoose.model('User', userSchema);