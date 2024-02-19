const serverStore = require('../serverStore');
const roomUpdates = require('./updates/rooms');


const roomJoinHandler = (socket, data) => {
  const {roomId} = data;

  // console.log("roomJoinHandler.js userId >>>>", socket.user)

  const participantDetails = {
    userId: socket.user._id,
    socketId: socket.id,
  }

  serverStore.joinActiveRoom(roomId, participantDetails);  

  const roomDetails = serverStore.getActiveRoom(roomId);

  
  // console.log("roomJoinHandler.js roomDetails >>>>", roomDetails);
  // send information to users in room that they should prepare for incoming connection
  roomDetails.participants.forEach(participant=>{
    if(participant.socketId !== participantDetails.socketId){
      socket.to(participant.socketId).emit("conn-prepare",{
        connUserSocketId: participantDetails.socketId,
      })
    }
  })

  roomUpdates.updateRooms();
}

module.exports = roomJoinHandler;