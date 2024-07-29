const express = require('express');
const router = express.Router();
const { getFilteredProperties } = require('../controllers/dpeController');

router.get('/search', getFilteredProperties);

module.exports = router;
