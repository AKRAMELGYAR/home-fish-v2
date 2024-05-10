const express = require('express');
const router = express.Router();
const userauth = require('../controllers/auth')


// register

// login


router.post('/register',userauth.register)
            // .post(userauth.register)

router.post('/login' , userauth.login)
            // .post(userauth.login)

module.exports = router;