import * as api from '../../shared/utils/api';
import {showAlert, hideAlert} from './alertActions';

export const friendsActions = {
  SET_FRIENDS: "FRIENDS.SET_FRIENDS",
  SET_PENDING_FRIEND_REQUESTS: "FRIENDS.SET_PENDING_FRIEND_REQUESTS",
  SET_ONLINE_USERS: "FRIENDS.SET_ONLINE_USERS",
  SET_ACCEPT_FRIEND_INVITATION: "FRIENDS.SET_ACCEPT_FRIEND_INVITATION",
  REJECT_FRIEND_INVITATION: "FRIENDS.REJECT_FRIEND_INVITATION"
}

export const getActions = (dispatch) => {
  return {
    sendFriendRequest: (data, closeDialogHandler) => {
      dispatch(sendFriendRequest(data, closeDialogHandler))
    },
    acceptFriendInvitation: (data) => dispatch(acceptFriendInvitation(data)),
    rejectFriendInvitation: (data) => dispatch(rejectFriendInvitation(data))
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

export const setFriends = (friends) => {
  return {
    type: friendsActions.SET_FRIENDS,
    friends
  }
}

export const setOnlineUsers = (onlineUsers) => {
  return {
    type: friendsActions.SET_ONLINE_USERS,
    onlineUsers
  }
}

export const setPendingFriendRequests = (pendingFriendsRequests) => {
  return {
    type: friendsActions.SET_PENDING_FRIEND_REQUESTS,
    pendingFriendsRequests
  }
}

export const acceptFriendInvitation = (data) => {
  return async (dispatch) => {
    const response = await api.acceptFriendInvitation(data);

    if(response.error){
      dispatch(showAlert(response.error?.response?.data?.message))
    }else{
      dispatch(showAlert("Request Accepted."))
      // closeDialogHandler();
    }
  }
}

export const rejectFriendInvitation = (data) => {
  return async (dispatch) => {
    const response = await api.rejectFriendInvitation(data);

    if(response.error){
      dispatch(showAlert(response.error?.response?.data?.message))
    }else{
      dispatch(showAlert("Request Rejected."))
      // closeDialogHandler();
    }
  }
}