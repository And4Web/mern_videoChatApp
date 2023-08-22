const {registerValidator, loginValidator} = require('../middleware/validator');


exports.register = async (req, res) => {
  console.log(`Request made to the endpoint: ${req.url}`);
  const {error, value} = registerValidator(req.body);
  if(error){
    console.log("JOI validation ERROR: ", error.details);
    const returnError = error.details.map(error=>{
      return error.message
    });
    return res.status(400).json({"Joi validation Error while REGISTER":returnError})
  }else{
    const {email, username} = value;
    const returnValue = {email, username}
    return res.status(200).json({'Register successfully validated': returnValue})
  }  
}


exports.login = async (req, res) => {
  console.log(`Request made to the endpoint: ${req.url}`);
  const {error, value} = loginValidator(req.body);
  if(error){
    console.log("JOI validation ERROR: ", error.details);
    const returnError = error.details.map(error=>{
      return error.message
    });
    return res.status(400).json({"Joi validation Error while LOGIN":returnError})
  }else{
    const {email} = value;
    const returnValue = {email}
    return res.status(200).json({'Login successfully validated': returnValue})
  }  
  
}
