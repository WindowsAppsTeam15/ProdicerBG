'use strict';

let mongoose = require('mongoose');
require('mongoose-double')(mongoose);

var SchemaTypes = mongoose.Schema.Types;

// Defining producer schema - similar as EF code first for db entry
let producerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        lowercase: true
        // enum: [Array]
    },
    mainProducts: {
        type: Array,
        required: true
    },
    telephone: {
        type: String
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    addressLongitude: {
        type: SchemaTypes.Double
    },
    addressLatitude: {
        type: SchemaTypes.Double
    },
    userId: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        required: true
    },
    logo: {
        type: Array
    }
});

mongoose.model('Producer', producerSchema);
