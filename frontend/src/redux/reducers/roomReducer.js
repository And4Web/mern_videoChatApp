import {roomActions} from '../actions/roomActions';


const initialState = {
  isUserInRoom: false,
  isUserRoomCreator: false,
  roomDetails: null,
  activeRooms: [],
  localStream: null,
  remoteStream: [],
  audioOnly: false,
  screenSharingStrean: null,
  isScreenSharingActive: false
}

const roomReducer = (state=initialState, action)=>{
  switch(action.type){
    case roomActions.OPEN_ROOM:
      return {
        ...state,
        isUserInRoom: action.isUserInRoom,
        isUserRoomCreator: action.isUserRoomCreator
      }
    default:
      return state
  }
}

export default roomReducer;