'use strict';

let express = require('express'),
    mongoose = require('mongoose'),
    passport = require('passport');

require('../models/user-model');
let User = mongoose.model('User');

// Defining users router
var router = express.Router();

router.post('/', function(req, res, next) {

	// registration logic here below

        // User.find({}, function(err, producers) {
        //     if (err) {
        //         let error = {
        //             message: err.message,
        //             status: 400
        //         };
        //         next(error);
        //         return;
        //     }

        //     res.status(200);
        //     res.json(producers);
        // });
    })
    .post('/token', function(req, res, next) {
    	// login logic here below

    })
    .put('/', function(req, res, next) {
        // modify user details logic here below


    });

module.exports = function(app) {
    app.use('/api/users', router);
};
