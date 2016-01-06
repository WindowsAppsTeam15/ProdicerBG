'use strict';

let express = require('express'),
    mongoose = require('mongoose'),
    passport = require('passport');

require('../models/producer-model');
let Producer = mongoose.model('Producer');

// Defining producers router
var router = express.Router();

router.get('/', function(req, res, next) {
        let requestChars = {
            name: '',
            description: ''
        };
        if (req.query.name) {
            requestChars.name = req.query.name;
        }
        if (req.query.description) {
            requestChars.description = req.query.description;
        }

        Producer.find({
            "name": {
                "$regex": requestChars.name,
                "$options": "i"
            },
            "description": {
                "$regex": requestChars.description,
                "$options": "i"
            },
            "isDeleted": false
        }, function(err, producers) {
            if (err) {
                let error = {
                    message: err.message,
                    status: 400
                };
                next(error);
                return;
            }

            res.status(200);
            res.json(producers);
        });
    })
    .get('/:id', function(req, res, next) {
        Producer.find({
            "_id": req.params.id,
            "isDeleted": false
        }, function(err, producer) {
            if (err) {
                let error = {
                    message: err.message,
                    status: 400
                };
                next(error);
                return;
            } else if (!producer[0]) {
                let error = {
                    message: 'There is no user with the given id.',
                    status: 400
                };
                next(error);
                return;
            }

            res.status(200);
            res.json(producer[0]);
        });
    })
    .post('/', function(req, res, next) {
        var dbProducer = new Producer(req.body);
        dbProducer.userId = 'testUser';
        dbProducer.isDeleted = false;

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
    })
    .delete('/:id', function(req, res, next) {
        Producer.find({
            "_id": req.params.id,
            "isDeleted": false
        }, function(err, producers) {
            if (err) {
                let error = {
                    message: err.message,
                    status: 400
                };
                next(error);
                return;
            } else if (!producers[0]) {
                let error = {
                    message: 'There is no user with the given id.',
                    status: 400
                };
                next(error);
                return;
            }

            let producer = producers[0];
            producer.isDeleted = true;
            producer.save(function(err) {
                if (err) {
                    let error = {
                        message: err.message,
                        status: 400
                    };
                    next(error);
                    return;
                } else {
                    res.status(200);
                    res.json('Producer deleted.');
                }
            });
        });
    })
    .put('/:id', function(req, res, next) {
        Producer.find({
            "_id": req.params.id,
            "isDeleted": false
        }, function(err, producers) {
            if (err) {
                let error = {
                    message: err.message,
                    status: 400
                };
                next(error);
                return;
            } else if (!producers[0]) {
                let error = {
                    message: 'There is no user with the given id.',
                    status: 400
                };
                next(error);
                return;
            }

            let producerToBeModified = producers[0];
            producerToBeModified.name = req.body.name || producerToBeModified.name;
            producerToBeModified.description = req.body.name || producerToBeModified.description;

            producerToBeModified.save(function(err) {
                if (err) {
                    let error = {
                        message: err.message,
                        status: 400
                    };
                    next(error);
                    return;
                } else {
                    res.status(200);
                    res.json(producerToBeModified);
                }
            });
        });
    });

module.exports = function(app) {
    app.use('/api/producers', router);
};
