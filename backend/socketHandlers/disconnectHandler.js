const {removeConnectedUser, getActiveRooms} = require('../serverStore');
const leaveRoomHandler = require('./leaveRoomHandler');

const disconnectHandler =  (socket) => {

  const activeRooms = getActiveRooms();

  activeRooms.forEach(activeRoom=>{
    const userInRoom = activeRoom.participants.some(participant=> participant.socketId === socket.id)

    if(userInRoom){
      leaveRoomHandler(socket, {roomId: activeRoom.roomId})
    }
  })



  removeConnectedUser(socket.id)
}

module.exports = disconnectHandler