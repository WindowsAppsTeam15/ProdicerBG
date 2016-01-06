'use strict';

let mongoose = require('mongoose');

// Defining producer schema - similar as EF code first for db entry
let producerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        required: true
    }
});

mongoose.model('Producer', producerSchema);