exports.login = async (req, res) => {
  console.log(`Request made to the endpoint: ${req.url}`);
  return res.send("Login endpoint......")
}

exports.register = async (req, res) => {
  console.log(`Request made to the endpoint: ${req.url}`);
  return res.send("Register endpoint.....")
}