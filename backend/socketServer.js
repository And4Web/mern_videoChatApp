const socketIo = require('socket.io');
const authSocket = require('./middleware/authSocket');

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
    console.log("new Socket >>>>> ", socket.id)
  })
}

module.exports = registerSocketServer