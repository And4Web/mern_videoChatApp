const addNewConnectedUser = require('../serverStore');

const newConnectionHandler = async (socket, io) => {

  const userDetails = await socket.user;

  addNewConnectedUser({
    socketId: socket.id,
    userId: userDetails._id
  })
}

module.exports = newConnectionHandler;