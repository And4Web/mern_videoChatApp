import io from 'socket.io-client';
import {setPendingFriendRequests, setFriends} from '../redux/actions/friendsActions';
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

    console.log("friends-list came from server: ", data)

    store.dispatch(setFriends(friends));
  })

  socket.on("online-users-update", (data)=>{
    console.log("online users update came")
  })
}

