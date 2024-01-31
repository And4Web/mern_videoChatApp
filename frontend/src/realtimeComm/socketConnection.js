import io from 'socket.io-client';
import {setPendingFriendRequests} from '../redux/actions/friendsActions';
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

    console.log("friend request socketConnection.js: ", data, pendingFriendsRequests);
    
    store.dispatch(setPendingFriendRequests(pendingFriendsRequests))
  })
}