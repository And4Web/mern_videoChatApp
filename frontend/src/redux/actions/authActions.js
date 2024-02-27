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
    setUserDetails: (userDetails) => {
      dispatch(setUserDetails(userDetails))
    }
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

    console.log("authActions.js response: ", response)
    
    if(response.exception?.code === "ECONNABORTED"){
      dispatch(showAlert("Can't connect to server at this moment. Try again later.")) 
    }

    if(response.error){
      //show error message in alert
      // dispatch(showAlert(response.exception?.message))
      dispatch(showAlert(response.exception?.response?.data?.message))    
      
    }else{
      // console.log("new response >>> ", response)
      const {userDetails, token} = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));
      localStorage.setItem("token", JSON.stringify(token));

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
      // dispatch(showAlert(response.exception?.message))
      dispatch(showAlert(response.exception?.response?.data?.message))
    }else{
      const {userDetails} = response.data;
      localStorage.setItem("user", JSON.stringify(userDetails));

      dispatch(setUserDetails(userDetails));
      navigate('/dashboard')
    }
  }
}