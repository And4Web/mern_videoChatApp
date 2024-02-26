const socketIo = require('socket.io');
const authSocket = require('./middleware/authSocket');
const newConnectionHandler = require("./socketHandlers/newConnectionHandler");
const disconnectHandler = require("./socketHandlers/disconnectHandler");
const directMessageHandler = require('./socketHandlers/directMessageHandler');
const directChatHistoryHandler = require('./socketHandlers/directChatHistoryHandler');
const createRoomHandler = require('./socketHandlers/createRoomHandler')
const roomJoinHandler = require('./socketHandlers/roomJoinHandler')
const leaveRoomHandler = require('./socketHandlers/leaveRoomHandler');
const roomInitializeConnectionHandler = require('./socketHandlers/roomInitializeConnectionHandler');
const roomSignalingDataHandler = require('./socketHandlers/roomSignalingDataHandler')
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
    console.log("new Socket >>>>> ", socket.id)
    
    // const newSocketId = socket.id;

    newConnectionHandler(socket, io)
    emitOnlineUsersUpdate();

    // listen to a direct message from client side
    socket.on("direct-message", (data)=>{
      // console.log(`new message from ${socket.user.username}: ${data.content}`)

      directMessageHandler(socket, data);
    })

    socket.on("direct-chat-history", (data)=>{
      
      console.log("direct-chat-history event data from client in socketServer.js", data)
      
      directChatHistoryHandler(socket, data)

      console.log(`direct-chat-history of ${socket.user.username} and ${data.receiverUserId}:`)
    })

    // join room
    socket.on("room-join", (data)=>{
      roomJoinHandler(socket, data)
    })

    // on creating new room
    socket.on("room-create", ()=>{
      createRoomHandler(socket)
    })

    // leave room
    socket.on("room-leave", (data) => {
      leaveRoomHandler(socket, data)
    })

    // peer connection init
    socket.on("conn-init", (data)=>{
      roomInitializeConnectionHandler(socket, data)
    })

    // handle peer connection signal event
    socket.on("conn-signal", (data)=>{
      roomSignalingDataHandler(socket, data);
    })

    // if a user gets disconnected - bad internet or browser turned down
    socket.on("disconnect", ()=>{
      // console.log("disconnect event emit.", newSocketId)
      disconnectHandler(socket)
    })

    // if participant leaves room
    // socket.on("room-participant-left", (data)=>{
    //   console.log("socketServer.js participant leave room >>> ", data)

    // })
  })

  setInterval(()=>{
    emitOnlineUsersUpdate();
  }, [1000*5])
}

module.exports = registerSocketServer