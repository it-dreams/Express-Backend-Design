const express = require('express');
const router = express.Router();
const {
    validationResult,
    check
} = require('express-validator')

// @routes POST api/users
// @desc Register User
// @access Public
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Enter a password with 6 and more characters')
    .isLength({
        min: 6
    })
], (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({
            error: error.array()
        })
    }
    res.send("User route")
});

module.exports = router;