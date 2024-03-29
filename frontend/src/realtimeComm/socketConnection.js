import io from 'socket.io-client';
import {setPendingFriendRequests, setFriends, setOnlineUsers} from '../redux/actions/friendsActions';
import store from '../redux/store';
import {updateDirectChatHistoryIfActive} from '../shared/utils/chat';

import * as roomHandler from './roomHandler'
import * as webRTCHandler from './webRTCHandler';

let socket = null;

export const connectWithSocketServer = (userDetails) => {
  const jwtToken = JSON.parse(localStorage.getItem("token"));

  socket = io('http://localhost:5555', {
    auth: {
      token: jwtToken
    }
  });

  socket.on("connect", ()=>{
    console.log("successfully connected to a socket server.");
    // console.log("new socket: ", socket.id);  
    // console.log("store in socketConnection.js: ", store);  
  })

  socket.on("friend-requests", (data)=>{
    const {pendingFriendsRequests} = data;
    store.dispatch(setPendingFriendRequests(pendingFriendsRequests))
  })

  socket.on("friends-list", (data)=>{
    const {friends} = data;

    // console.log("friends-list came from server: ", data)

    store.dispatch(setFriends(friends));
  })

  socket.on("online-users-update", (data)=>{
    const {onlineUsers} = data;
    store.dispatch(setOnlineUsers(onlineUsers));
  })

  // socket.on('direct-message', (data)=>{
  //   console.log('direct-message event from server > > >', data)
  // })

  socket.on('direct-chat-history', (data)=>{
    // console.log('direct-chat-history from server > > >', data)
    updateDirectChatHistoryIfActive(data)
  })

  // on room create
  socket.on("room-create", (data)=>{
    console.log("socketConnection.js created room details came from server >>> ", data)

    roomHandler.newRoomCreated(data);

  })
  
  socket.on("active-rooms", data=>{
    roomHandler.updateActiveRooms(data)
  })

  socket.on("conn-prepare", data => {
    console.log("socketConnection.js prepare connection >>> ", data)
    const {connUserSocketId} = data;

    webRTCHandler.preapreNewPeerConnection(connUserSocketId, false);

    socket.emit("conn-init", {connUserSocketId})

  })

  socket.on("conn-init", (data) => {
    const {connUserSocketId} = data;
    webRTCHandler.preapreNewPeerConnection(connUserSocketId, true);
  })

  socket.on("conn-signal", (data)=>{
    webRTCHandler.handleSignalingData(data);
  }) 

  socket.on("room-participant-left", (data) =>{
    console.log("socketConnection.js user left room >>> ", data.connUserSocketId);
    webRTCHandler.handleParticipantLeftRoom(data);
  })
}

export const sendDirectMessage = (data) => {
  data.clientSocketId = socket.id;
  // console.log("sendDirectMessage: ", data);
  socket.emit("direct-message", data)
}

export const getDirectChatHistory = (data) => {
  console.log("getDirectChatHistory >>> ", data);
  socket.emit("direct-chat-history", data)
}

export const createNewRoom = () => {
  socket.emit("room-create");
}

export const joinRoom = (data) => {
  socket.emit("room-join", data);
}

export const leaveRoom = (data) => {
  socket.emit('room-leave', data);
}

export const signalPeerData = (data) => {
  socket.emit('conn-signal', data);
}