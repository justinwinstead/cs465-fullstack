const express = require('express');
const router = express.Router();
const controller = require('../controllers/trips');

/* GET homepage */
router
    .route('/trips')
    .get(controller.tripsList);

router
    .route('/trips/:tripCode')
    .get(controller.tripsFindByCode);

module.exports = router;
