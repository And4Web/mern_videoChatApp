const express = require("express");
const router = express.Router();
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});
const joiValidator = require('../middleware/validator');

const {login, register} = require('../controllers/authController');

const registerSchema = Joi.object({
  username: Joi.string().min(3).required,
  email: Joi.string().email().required,
  password: Joi.string().min(8).required
});
const loginSchema = Joi.object({
  email: Joi.string().email().required,
  password: Joi.string().min(8).required
});

router.post('/login', joiValidator(loginSchema), login)

router.post('/register', joiValidator(registerSchema), register)

module.exports = router;