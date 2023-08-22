const Joi = require('joi');

const joiValidator = (schema) => (payload) => schema.validate(payload, {abortEarly: false})


const registerSchema = Joi.object({
  username: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required()
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required()
});


module.exports = {
  registerValidator: joiValidator(registerSchema),
  loginValidator: joiValidator(loginSchema)
};