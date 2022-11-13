const express = require('express');
const router = express.Router();
const controller = require('../controllers/rooms');

/* GET travelpage */
router.get('/', controller.rooms);

module.exports = router;