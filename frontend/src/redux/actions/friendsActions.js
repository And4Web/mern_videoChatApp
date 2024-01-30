import * as api from '../../shared/utils/api';


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

const openAlertMessage = (content) => {
  return {
    type: "",
    content
  }
}

const sendFriendRequest = (data, closeDialogHandler) => {
  return async (dispatch) => {
    const response = await api.sendFriendRequest(data);
    if(response.error){
      dispatch(openAlertMessage(response.exception?.response?.data?.message))
    }else{
      dispatch(openAlertMessage("Invitation sent"))
      closeDialogHandler();
    }
  }
}