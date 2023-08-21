const joiValidator = (schema) => {
  return async (req, res, next) => {
    const {error, value} = await schema.validate(req.body)
    if(!error){
      console.log("validation success: ", value);
      next()
    }else{
      console.log("JOI validation ERROR: ", error)
      return res.status(400).json({"Validation Error ": error})
    }
  }
}

module.exports = joiValidator;