const {addNewConnectedUser} = require('../serverStore');
const updateFriendsPendingRequests = require('../socketHandlers/updates/friends')

const newConnectionHandler = async (socket, io) => {

  const userDetails = await socket.user;

  addNewConnectedUser({
    socketId: socket.id,
    userId: userDetails._id
  })

  // update pending friend reqeust list
  updateFriendsPendingRequests(userDetails._id)

}

module.exports = newConnectionHandler;