const {addNewConnectedUser} = require('../serverStore');
const friendsUpdate = require('../socketHandlers/updates/friends')
const roomsUpdate = require('../socketHandlers/updates/rooms');


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

  // update active rooms list on new connection
  setTimeout(()=>{
    roomsUpdate.updateRooms(socket.id)
  },[500])
}

module.exports = newConnectionHandler;