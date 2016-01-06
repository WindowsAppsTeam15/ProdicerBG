'use strict';

let express = require('express'),
    passport = require('passport'),
    usersController = require('../controllers/users-controller');

require('../authentication-config');

// Defining users router
var router = express.Router();

router.post('/', usersController.register)
    .post('/token', usersController.login)
    .put('/', passport.authenticate('bearer', {
            session: false
        }),
        usersController.changeUserDetails);

module.exports = function(app) {
    app.use('/api/users', router);
};
