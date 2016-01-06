'use strict';

let mongoose = require('mongoose'),
    fs = require('fs');

require('../models/producer-model');
let Producer = mongoose.model('Producer');

let getAll = function(req, res, next) {
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
};


let getById = function(req, res, next) {
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
};

let createNew = function(req, res, next) {
    var dbProducer = new Producer(req.body);
    dbProducer.userId = req.user._id;
    dbProducer.isDeleted = false;

    // var imgPath = './img/logo.png';
    // dbProducer.img.data = fs.readFileSync(imgPath);
    // dbProducer.img.contentType = 'image/png';

    dbProducer.type = 'Machinary';
    dbProducer.mainProducts = ['cars'];
    dbProducer.email = req.user.email;

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
};

let deleteProducer = function(req, res, next) {
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
};

let edit = function(req, res, next) {
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
};

let controller = {
    getAll,
    getById,
    createNew,
    deleteProducer,
    edit
};

module.exports = controller;
