'use strict';

let passport = require('passport'),
    BearerStrategy = require('passport-http-bearer'),
    mongoose = require('mongoose');

require('./models/user-model');
let User = mongoose.model('User');

passport.use(new BearerStrategy(function(token, done) {
    User.findOne({
        token: token
    }, function(err, user) {
        if (err) {
            return done(err);
        } else if (!user) {
            return done(null, false);
        }
        return done(null, user, {
            scope: 'all'
        });
    });
}));
