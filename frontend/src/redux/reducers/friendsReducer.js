import {friendsActions} from '../actions/friendsActions';

const initialState = {
  friends: [],
  pendingFriendsRequests: [],
  onlineUsers: [],
}

const friendsReducer = (state=initialState, action ) => {
  switch(action.type){
    case friendsActions.SET_FRIENDS:
      return {
        ...state,
        friends: action.friends
      }
    case friendsActions.SET_PENDING_FRIEND_REQUESTS:
      return {
        ...state,
        pendingFriendsRequests: action.pendingFriendsRequests
      }
    case friendsActions.SET_ONLINE_USERS:
      return {
        ...state,
        onlineUsers: action.onlineUsers
      }
    default: 
      return state
  }
}

export default friendsReducer