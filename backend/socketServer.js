const socketIo = require('socket.io');
const authSocket = require('./middleware/authSocket');
const newConnectionHandler = require("./socketHandlers/newConnectionHandler");
const disconnectHandler = require("./socketHandlers/disconnectHandler");
const serverStore = require('./serverStore');

const registerSocketServer = (server) => {
  const io = socketIo(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    },
  });

  serverStore.setSocketServerInstance(io);

  io.use((socket, next)=>{
    authSocket(socket, next)
  })

  const emitOnlineUsersUpdate = () =>{ 
    const onlineUsers = serverStore.getOnlineUsersUpdate();

    io.emit("online-users-update", {onlineUsers});
  }

  io.on("connection", (socket)=>{
    // console.log("new Socket >>>>> ", socket.id)
    newConnectionHandler(socket, io)
    emitOnlineUsersUpdate();

    // if a user gets disconnected - bad internet or browser turned down
    socket.on("disconnect", (socket)=>{
      disconnectHandler(socket)
    })
  })

  setInterval(()=>{
    emitOnlineUsersUpdate();
  }, [1000*5])
}

module.exports = registerSocketServer