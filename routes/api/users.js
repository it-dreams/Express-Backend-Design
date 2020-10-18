const express = require('express');
const gravatar = require('gravatar');
const bcrypt = require('bcrypt');
const router = express.Router();
const {
    validationResult,
    check
} = require('express-validator');
const {
    JsonWebTokenError
} = require('jsonwebtoken');

// include user model
const User = require('../../models/User');

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
],
async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({
            error: error.array()
        })
    }
    const {
        name,
        email,
        password
    } = req.body;

    try {
        // See if user exists
        let user = await User.findOne({
            email
        });

        if (user) {
            return res.status(400).json({
                errors: [{
                    msg: 'User already exists'
                }]
            });
        }

        // Get user Gravatar
        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        });

        user = new User({
            name,
            email,
            avatar,
            password
        });

        // Encrypt password
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        // Return JsonWebToken
        res.send("User Registered")
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;