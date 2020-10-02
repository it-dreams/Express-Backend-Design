const express = require('express');
const routes = express.Router();

// @routes GET api/posts
// @desc Test Route
// @access Public
router.get('/', (req, res) => res.send('Post route'));

module.exports = routes;