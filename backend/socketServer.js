const socketIo = require('socket.io');

const registerSocketServer = (server) => {
  const io = socketIo(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    },
  });

  io.on("connection", (socket)=>{
    console.log("new Socket >>>>> ", socket.id)
  })
}

module.exports = registerSocketServer