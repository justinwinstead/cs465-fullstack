const express = require('express');
const router = express.Router();
const controller = require('../controllers/meals');

/* GET travelpage */
router.get('/', controller.meals);

module.exports = router;