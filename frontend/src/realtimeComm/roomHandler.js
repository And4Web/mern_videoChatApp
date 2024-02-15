import store from '../redux/store';
import {setOpenRoom} from '../redux/actions/roomActions'
import * as socketConnection from './socketConnection'


export const createNewRoom = () => {
  store.dispatch(setOpenRoom(true, true))
  socketConnection.createNewRoom();
}