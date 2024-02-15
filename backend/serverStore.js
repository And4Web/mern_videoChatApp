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

module.exports = {
  addNewConnectedUser,
  removeConnectedUser,
  getOnlineUsers,
  setSocketServerInstance,
  getSocketServerInstance,
  getOnlineUsersUpdate,
  connectedUsersMap,
  addNewActiveRoom
};