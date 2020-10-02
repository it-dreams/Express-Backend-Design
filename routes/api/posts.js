const express = require('express');
const router = express.Router();

// @routes GET api/posts
// @desc Test Route
// @access Public
router.get('/', (req, res) => res.send('Post route'));

module.exports = router;