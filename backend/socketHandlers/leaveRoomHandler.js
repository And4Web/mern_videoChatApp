const serverStore = require("../serverStore");
const roomsUpdate = require("./updates/rooms");

const leaveRoomHandler = (socket, data) => {
  const {roomId} = data;
  const activeRoom  = serverStore.getActiveRoom(roomId);

  if(activeRoom){
    serverStore.leaveActiveRoom(roomId, socket.id);
    roomsUpdate.updateRooms();
  }
}

module.exports = leaveRoomHandler