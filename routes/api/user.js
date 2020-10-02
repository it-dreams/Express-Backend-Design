const express = require('express');
const routes = express.Router();

// @routes GET api/user
// @desc Test Route
// @access Public
router.get('/', (req, res) => res.send('User route'));

module.exports = routes;