const {addNewConnectedUser} = require('../serverStore');
const friendsUpdate = require('../socketHandlers/updates/friends')


const newConnectionHandler = async (socket, io) => {

  const userDetails = await socket.user;

  addNewConnectedUser({
    socketId: socket.id,
    userId: userDetails._id
  })

  // update pending friend reqeust list on new connection
  friendsUpdate.updateFriendsPendingRequests(userDetails._id)

  // update friends list on new connection
  friendsUpdate.updateFriends(userDetails._id)
}

module.exports = newConnectionHandler;