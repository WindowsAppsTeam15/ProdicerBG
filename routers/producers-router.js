'use strict';

let express = require('express'),
    passport = require('passport'),
    producerController = require('../controllers/producers-controller');

require('../authentication-config');

// Defining producers router
let router = express.Router();

router.get('/', producerController.getAll)
    .get('/count', producerController.getCount)
    .get('/:id', producerController.getById)
    .post('/', passport.authenticate('bearer', {
            session: false
        }),
        producerController.createNew)
    .delete('/:id', passport.authenticate('bearer', {
            session: false
        }),
        producerController.deleteProducer)
    .put('/:id', passport.authenticate('bearer', {
            session: false
        }),
        producerController.edit);

module.exports = function(app) {
    app.use('/api/producers', router);
};
