import io from 'socket.io-client';
import {setPendingFriendRequests, setFriends, setOnlineUsers} from '../redux/actions/friendsActions';
import store from '../redux/store';

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

  socket.on('direct-chat-history', (data)=>{
    console.log('direct-chat-history from server > > >', data)
  })
  
}

export const sendDirectMessage = (data) => {
  // console.log(data);
  socket.emit("direct-message", data)
}

export const sendDirectChatHistory = (data) => {
  console.log("sendDirectChatHistory >>> ", data);
  socket.emit("direct-chat-history", data)
}