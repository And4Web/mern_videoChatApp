import store from '../redux/store';
import {setOpenRoom, setRoomDetails, setActiveRooms} from '../redux/actions/roomActions'
import * as socketConnection from './socketConnection'
import * as webRTCHandler from './webRTCHandler';


export const createNewRoom = () => {
  const successCallback = () => {
    store.dispatch(setOpenRoom(true, true))
    socketConnection.createNewRoom();
  }

  webRTCHandler.getLocalStreamPreview(false, successCallback());
}

export const newRoomCreated = (data) => {
  const {roomDetails} = data
  store.dispatch(setRoomDetails(roomDetails));
}

export const updateActiveRooms = (data) => {
  const {activeRooms} = data;
  console.log("roomHandler.js Active Rooms >>> ", activeRooms)
  
  // we want to render the active rooms only if the creator of the room is our friend
  const friends = store.getState().friends?.friends;
  let rooms = [];

  activeRooms.forEach(room=>{
    friends.forEach(f=>{
      if(f.id === room.roomCreator.userId){
        rooms.push({...room, creatorUsername: f.username});
      }
    })
  })

  store.dispatch(setActiveRooms(rooms))
}

export const joinRoom = (roomId) => {

  const successCallback = () => {
    store.dispatch(setRoomDetails({roomId}));
    store.dispatch(setOpenRoom(false, true));

    socketConnection.joinRoom({roomId});
  }

  webRTCHandler.getLocalStreamPreview(false, successCallback());

  
}

export const leaveRoom = () => {
  const roomId = store.getState().room.roomDetails.roomId;

  socketConnection.leaveRoom({roomId});

  store.dispatch(setRoomDetails(null));
  store.dispatch(setOpenRoom(false, false));
}