'use strict';

// Requesting needed node modules
let express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    passport = require('passport');

// Here is the future implementation of the authentication
// passport.use(new BearerStrategy(
//     function(token, done) {
//         User.findOne({
//             token: token
//         }, function(err, user) {
//             if (err) {
//                 return done(err);
//             }
//             if (!user) {
//                 return done(null, false);
//             }
//             return done(null, user, {
//                 scope: 'all'
//             });
//         });
//     }
// ));

// Connecting to local mongodb
let connectionString = 'mongodb://127.0.0.1:27017/producerbg';
mongoose.connect(connectionString);

// Setting up the server
let app = express();
let port = 7777;
app.use(bodyParser.json());

// Point the server to the router we have created
let producersRouter = require('./routers/producers-router');
producersRouter(app);

let usersRouter = require('./routers/users-router');
usersRouter(app);

// Middleware to handle errors on the server
app.use(function(err, req, res, next) {
    if (err) {
        res.status(err.status || 500)
            .json({
                message: err.message
            });
        return;
    }
});

// Open the server connection
app.listen(port, function() {
    console.log(`Server running on port ${port}`);
});
