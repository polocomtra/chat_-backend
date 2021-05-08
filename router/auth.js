const express = require('express');
const { login, register } = require('../controllers/authController')
const router = express.Router();
const { validate } = require('../validation/index')
const { rules: registrationRules } = require('../validation/auth/register')
const { rules: loginRules } = require('../validation/auth/login')


router.post('/login', [loginRules, validate], login)

router.post('/register', [registrationRules, validate], register)

module.exports = router;