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
    default:
      return state
  }
}

export default roomReducer;