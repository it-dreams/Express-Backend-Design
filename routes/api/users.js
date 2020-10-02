const express = require('express');
const router = express.Router();

// @routes GET api/users
// @desc Test Route
// @access Public
router.get("/", (req, res) => res.send("Users route"));

module.exports = router;