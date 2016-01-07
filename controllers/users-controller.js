'use strict';

let mongoose = require('mongoose'),
    randtoken = require('rand-token');

require('../models/user-model');
let User = mongoose.model('User');

let register = function(req, res, next) {
    // Validate user properties

    let dbUser = new User(req.body);
    dbUser.isDeleted = false;
    dbUser.token = randtoken.generate(16);
    
    dbUser.save(function(err) {
        if (err) {
            let error = {
                message: err.message,
                status: 400
            };
            next(error);
            return;
        } else {
            res.status(201);
            res.json({
                username: dbUser.username,
                token: dbUser.token
            });
        }
    });
};

let login = function(req, res, next) {
    // Validate username and password
    let user = req.body;
    user.username = user.username.toLowerCase();
    User.findOne({
        username: user.username
    }, function(err, dbUser) {
        if (err) {
            let error = {
                message: err.message,
                status: 400
            };
            next(error);
        } else if (!dbUser || user.password !== dbUser.password) {
            let error = {
                message: 'Invalid username or password!',
                status: 400
            };
            next(error);
        } else {
            if (!dbUser.token) {
                dbUser.token = randtoken.generate(16);
                dbUser.save();
            }
            res.status(201);
            res.json({
                username: dbUser.username,
                token: dbUser.token
            });
        }
    });
};

let changeUserDetails = function(req, res, next) {

    let userToBeModified = req.user;
    let modifiedUser = req.body;

    if (!(req.body)) {
        let error = {
            message: 'No modifications submitted.',
            status: 400
        };
        next(error);
    } else {
        userToBeModified.username = modifiedUser.username || userToBeModified.username;
        userToBeModified.password = modifiedUser.password || userToBeModified.password;
        userToBeModified.email = modifiedUser.email || userToBeModified.email;
        userToBeModified.isDeleted = modifiedUser.isDeleted || userToBeModified.isDeleted;
    }

    userToBeModified.save(function(err) {
        if (err) {
            let error = {
                message: err.message,
                status: 400
            };
            next(error);
            return;
        } else {
            res.status(201);
            res.json({
                username: userToBeModified.username
            });
        }
    });
};

let controller = {
    register,
    login,
    changeUserDetails
};

module.exports = controller;
