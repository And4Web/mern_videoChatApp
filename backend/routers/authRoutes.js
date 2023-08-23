const express = require("express");
const router = express.Router();
// const Joi = require('joi');
// const validator = require('express-joi-validation').createValidator({});

const verifyToken = require('../middleware/auth');

const {login, register} = require('../controllers/authController');

router.post('/login', login)

router.post('/register', register)

router.get('/test', verifyToken, (req, res)=>{
  const user = req.user;
  return res.status(200).json({'message': user})
})

module.exports = router;