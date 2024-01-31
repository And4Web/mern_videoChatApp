import * as api from '../../shared/utils/api';
import {showAlert, hideAlert} from './alertActions';

export const friendsActions = {
  SET_FRIENDS: "FRIENDS.SET_FRIENDS",
  SET_PENDING_FRIEND_REQUESTS: "FRIENDS.SET_PENDING_FRIEND_REQUESTS",
  SET_ONLINE_USERS: "FRIENDS.SET_ONLINE_USERS"
}

export const getActions = (dispatch) => {
  return {
    sendFriendRequest: (data, closeDialogHandler) => {
      dispatch(sendFriendRequest(data, closeDialogHandler))
    }
  }
}

// const openAlertMessage = (content) => {
//   return {
//     type: "",
//     content
//   }
// }

const sendFriendRequest = (data, closeDialogHandler) => {
  return async (dispatch) => {
    const response = await api.sendFriendRequest(data);
    console.log("sendFriendRequest response, friendsAction.js: ", response)
    if(response.error){
      dispatch(showAlert(response.error?.response?.data?.message))
    }else{
      dispatch(showAlert("Invitation sent"))
      closeDialogHandler();
    }
  }
}

export const setPendingFriendRequests = (pendingFriendsRequests) => {
  return {
    type: friendsActions.SET_PENDING_FRIEND_REQUESTS,
    pendingFriendsRequests
  }
}