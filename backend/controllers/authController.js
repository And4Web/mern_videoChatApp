const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const { registerValidator, loginValidator } = require("../utils/validator");

exports.register = async (req, res) => {
  try {
    // input validation
    const { error, value } = registerValidator(req.body);
    if (error) {
      const returnError = error.details.map((error) => {
        return error.message;
      });
      console.log("JOI validation ERROR: ", returnError);
      return res
        .status(400)
        .json({ "Joi validation Error while REGISTER": returnError });
    } else {
      const { email, username, password } = value;
      // check if the user already exists by email
      const userExists = await User.exists({ email });
      if (userExists) {
        return res.status(409).json({ message: "user already exists." });
      }
      // encrypt the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // create new user document
      const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
      });

      // create JWT token

      const token = jwt.sign({
       username, email
      }, process.env.JWT_SECRET_KEY, {expiresIn: '2h'});

      // save the user in database after JWT authentication
      newUser.save();

      return res.status(200).json({
        message: "Registration successfully done. New user created.",
        userDetails: { email, username }, token
      });
    }
  } catch (error) {
    console.log("new registration ERROR >>> ", error.message);
  }
};

exports.login = async (req, res) => {
  try {
    // input validation
    const { error, value } = loginValidator(req.body);
    if (error) {
      const returnError = error.details.map((error) => {
        return error.message;
      });
      console.log("JOI validation ERROR: ", returnError);
      return res
        .status(400)
        .json({ message: returnError, success: false});
    } else {
      const { email, password } = value;
      // find the user in the database
      const user = await User.findOne({ email });
      
      // compare the password with the hashed password in database
      if (user && (await bcrypt.compare(password, user.password))) {
        const {username, _id, email} = user;
        // send JWT token
        const token = jwt.sign({username, _id, email}, process.env.JWT_SECRET_KEY, {expiresIn: '24h'});

        

        // login success
        return res.status(200).json({ message: "Login successfully validated", success: true, userDetails: {_id, email, username }, token });
      } else {
        return res.status(404).json({message: "User not found or password did not match. Try again", success: false})
      }
    }
  } catch (error) {
    return res.status(400).json({ "login ERROR ": error.message });
  }
};
