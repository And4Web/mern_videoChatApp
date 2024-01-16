const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers["authorization"];
  if (!token) {
    return res
      .status(403)
      .json({ message: "A valid token is required for authentication." });
  }
  try {
    token = token.replace(/^Bearer\s+/, "");
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decodedToken;
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Invalid token", Error: error.message });
  }
  return next();
};

module.exports = verifyToken;
