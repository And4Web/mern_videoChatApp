const serverStore = require("../serverStore");
const roomsUpdate = require("./updates/rooms");

const leaveRoomHandler = (socket, data) => {
  const {roomId} = data;
  const activeRoom  = serverStore.getActiveRoom(roomId);

  if(activeRoom){
    serverStore.leaveActiveRoom(roomId, socket.id);

    const updatedActiveRoom = serverStore.getActiveRoom(roomId);

    console.log("updatedActiveRoom >>> ", updatedActiveRoom)

    
// socket.to(participant.socketId).emit("room-participant-left", {connUserSocketId: socket.id})
    if(updatedActiveRoom){
      updatedActiveRoom?.participants?.forEach(participant=>{        
        socket.to(participant.socketId).emit("room-participant-left", {connUserSocketId: socket.id})
      })
    }
    roomsUpdate.updateRooms();
  }
}

module.exports = leaveRoomHandler