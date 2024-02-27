const {v4: uuid} = require('uuid');

const connectedUsers = new Map();
let activeRooms = [];

let io = null;

const setSocketServerInstance = (ioInstance) => {
  io = ioInstance;
}
const getSocketServerInstance = () => {
  return io;
}

const addNewConnectedUser = ({socketId, userId}) => {
  connectedUsers.set(socketId, {userId});
  console.log("Connected Users >>> ", connectedUsers)
}

const removeConnectedUser = (socketId) => {
  if(connectedUsers.has(socketId)){
    connectedUsers.delete(socketId);
    console.log("New Connected Users >>> ", connectedUsers)
  }
}

const getOnlineUsers = (targetId) => {
  const activeUsers = [];

  connectedUsers.forEach((value, socketId)=>{
    if(value.userId === targetId){
      activeUsers.push(socketId)
    }
  })

  return activeUsers
}

const getOnlineUsersUpdate = () => {
  const onlineUsers = [];

  connectedUsers.forEach((value, key)=>{
    onlineUsers.push({socketId: key, userId: value.userId})
  })

  return onlineUsers;
}

const connectedUsersMap = () => {
  return connectedUsers;
}

// rooms
const addNewActiveRoom = (userId, socketId) => {
  const newActiveRoom = {
    roomCreator: {
      userId, 
      socketId
    },
    participants: [{
      userId,
      socketId
    }],
    roomId: uuid()
  }

  activeRooms = [...activeRooms, newActiveRoom];
  console.log("serverStore.js active rooms>>> ", activeRooms)

  return newActiveRoom;
}

const getActiveRooms = () => {
  return [...activeRooms];
}

const getActiveRoom = (roomId) => {
  const activeRoom = activeRooms.find(activeRoom=>activeRoom.roomId === roomId)

  if(activeRoom){
    return {...activeRoom};
  }else{
    return null;
  }
}

const joinActiveRoom = (roomId, newParticipantDetails) => {
  const room = activeRooms.find(room => room.roomId === roomId);
  activeRooms = activeRooms.filter(room=>room.roomId !== roomId);

  const updatedRoom = {
    ...room,
    participants: [...room.participants, newParticipantDetails]
  }
  activeRooms.push(updatedRoom)
  console.log("serverStore.js active rooms >>> ", activeRooms)
}

const leaveActiveRoom = (roomId, participantSocketId) => {
  const activeRoom = activeRooms.find(room=>room.roomId === roomId)

  if(activeRoom){
    const copyOfActiveRoom = {...activeRoom};

    copyOfActiveRoom.participants = copyOfActiveRoom.participants.filter(participant=>participant.socketId !== participantSocketId);

    activeRooms = activeRooms.filter(room=>room.roomId !== roomId);

    if(copyOfActiveRoom.participants.length > 0){
      activeRooms.push(copyOfActiveRoom)
    }
  }
}

module.exports = {
  addNewConnectedUser,
  removeConnectedUser,
  getOnlineUsers,
  setSocketServerInstance,
  getSocketServerInstance,
  getOnlineUsersUpdate,
  connectedUsersMap,
  addNewActiveRoom,
  getActiveRooms,
  getActiveRoom,
  joinActiveRoom,
  leaveActiveRoom
};