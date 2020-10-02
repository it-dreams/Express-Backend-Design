const express = require('express');
const router = express.Router();

// @routes GET api/profile
// @desc Test Route
// @access Public
router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;