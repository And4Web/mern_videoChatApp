const serverStore = require('../serverStore');
const {updateRooms} = require('./updates/rooms')


const createRoomHandler = (socket) => {
  const socketId = socket.id;
  const userId = socket.user._id;
  
  console.log("createRoomHandler.js >>> handling room create event", socketId, userId)

  const roomDetails = serverStore.addNewActiveRoom(userId, socketId)

  socket.emit("room-create", {roomDetails})

  updateRooms();
}

module.exports = createRoomHandler;