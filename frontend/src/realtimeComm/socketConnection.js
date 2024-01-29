import io from 'socket.io-client';

let socket = null;

export const connectWithSocketServer = () => {
  socket = io('http://localhost:5555');

  socket.on("connect", ()=>{
    console.log("successfully connected to a socket server.");
    console.log("new socket: ", socket.id);
  })
}