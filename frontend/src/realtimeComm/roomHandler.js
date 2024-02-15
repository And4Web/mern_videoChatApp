import store from '../redux/store';
import {setOpenRoom} from '../redux/actions/roomActions'


export const createNewRoom = () => {
  store.dispatch(setOpenRoom(true, true))
}