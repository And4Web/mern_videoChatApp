const express = require("express");
const router = express.Router();
// const Joi = require('joi');
// const validator = require('express-joi-validation').createValidator({});

const {login, register} = require('../controllers/authController');


router.post('/login', login)

router.post('/register', register)

module.exports = router;