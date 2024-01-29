const connectedUsers = new Map();

const addNewConnectedUser = ({socketId, userId}) => {
  connectedUsers.set(socketId, {userId});
  console.log("Connected Users >>> ", connectedUsers)
}

module.exports = addNewConnectedUser;