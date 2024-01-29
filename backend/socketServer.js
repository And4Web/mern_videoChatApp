const socketIo = require('socket.io');
const authSocket = require('./middleware/authSocket');
const newConnectionHandler = require("./socketHandlers/newConnectionHandler");

const registerSocketServer = (server) => {
  const io = socketIo(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    },
  });

  io.use((socket, next)=>{
    authSocket(socket, next)
  })

  io.on("connection", (socket)=>{
    // console.log("new Socket >>>>> ", socket.user._id)
    newConnectionHandler(socket, io)
  })
}

module.exports = registerSocketServer