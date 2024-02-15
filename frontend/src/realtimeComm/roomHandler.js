import store from '../redux/store';
import {setOpenRoom, setRoomDetails} from '../redux/actions/roomActions'
import * as socketConnection from './socketConnection'


export const createNewRoom = () => {
  store.dispatch(setOpenRoom(true, true))
  socketConnection.createNewRoom();
}

export const newRoomCreated = (data) => {
  const {roomDetails} = data
  store.dispatch(setRoomDetails(roomDetails));
}

export const updateActiveRooms = (data) => {
  const {activeRooms} = data;
  console.log("roomHandler.js Active Rooms >>> ", activeRooms)
  // store.dispatch()
}