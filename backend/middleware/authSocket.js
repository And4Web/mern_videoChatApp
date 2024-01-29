const jwt = require('jsonwebtoken');

const verifySocketToken = (socket, next) => {
  try {
    // const socketToken = socket.handShake.auth?.token;
    const socketToken = socket.handshake.auth.token;
    // console.log("socket token >>> ", socketToken)
    const decoded = jwt.verify(socketToken, process.env.JWT_SECRET_KEY);

    if(!decoded){
      const socketUnAuthError = new Error("Unauthorized user")
      next(socketUnAuthError)
    }else{
      socket.user = decoded;
      next();
    }    
  } catch (error) {
    const socketError = new Error(error);
    console.log("socket Error >>> ", socketError)
    next(socketError)
  }
}

module.exports = verifySocketToken;