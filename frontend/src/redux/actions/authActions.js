import * as api from '../../shared/utils/api';

import {showAlert, hideAlert} from './alertActions';

export const authActions = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS"
}

export const getActions = (dispatch) => {
  return {
    login: (userDetails, navigate)=>{
      dispatch(login(userDetails, navigate))
    },
    register: (userDetails, navigate)=>{
      dispatch(register(userDetails, navigate))
    },
  }
}

const setUserDetails = (userDetails) => {
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails
  }
}

const login = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await api.login(userDetails);

    console.log("authActions.js response: ", response.exception.message)

    if(response.error){
      //show error message in alert
      dispatch(showAlert(response.exception.message))
    }else{
      const {userDetails} = response.data;
      localStorage.setItem("user", JSON.stringify(userDetails));

      dispatch(setUserDetails(userDetails));
      navigate('/dashboard')
    }
  }
}

const register = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await api.register(userDetails);

    console.log("authActions.js response: ", response)

    if(response.error){
      //show error message in alert
      dispatch(showAlert(response.exception.message))
    }else{
      const {userDetails} = response.data;
      localStorage.setItem("user", JSON.stringify(userDetails));

      dispatch(setUserDetails(userDetails));
      navigate('/dashboard')
    }
  }
}