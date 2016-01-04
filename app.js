'use strict';

// Requesting needed node modules

let express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    passport = require('passport');

// Here is the future implementation of the outhentication

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


// Defining producer schema - similar as EF code first for db entry

let producerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
mongoose.model('Producer', producerSchema);

let Producer = mongoose.model('Producer');


// Defining router

var router = express.Router();

router.get('/', function(req, res) {
        Producer.find({}, function(err, producers) {
            if (err) {
                res.status(400).JSON(err);
                return;
            }
            res.status(200);
            res.json(producers);
        });
    })
    .get('/:id', function(req, res) {
        res.json(req.headers);
    })
    .post('/', function(req, res, next) {
        var dbProducer = new Producer(req.body);

        dbProducer.save(function(err) {
            if (err) {
                let error = {
                    message: err.message,
                    status: 400
                };
                next(error);
                return;
            } else {
                res.status(201);
                res.json(dbProducer);
            }
        });
    });


// More routes and methods to be implemented

// app.get('/api/producers/:id', function (req, res) {
// 	res.json({
// 		result: req.headers
// 	});
// });

// app.get('/api/producers/?name=:name&type=:type', function (req, res) {
// 	res.json({
// 		result: req.headers
// 	});
// });

// app.put('/api/producers/:id',
//     passport.authenticate('bearer', {
//         session: false
//     }),
//     function(req, res) {
//         res.json({
//             result: req.headers
//         });
//     });

// app.delete('/api/producers/:id', function (req, res) {
// 	res.json({
// 		result: req.headers
// 	});
// });


// Point the server to the router we have created

app.use('/api/producers', router);


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
