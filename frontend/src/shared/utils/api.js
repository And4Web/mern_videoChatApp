import axios from 'axios';
import {logout} from './auth';

const baseUrl = process.env.REACT_APP_BACKEND_URL;

// axios configuration:
const apiClient = axios.create({
  baseURL: baseUrl,
  timeout: 1000
})

// Axios interceptors: this logic will execute before every request to the server:
apiClient.interceptors.request.use((config)=>{
  const userDetails = localStorage.getItem("user");

  if(userDetails){
    const token = JSON.parse(userDetails).token;
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, (error)=>{
  return Promise.reject(error)
})


// public routes:
export const login = async (data) => {
  try {
    // console.log("api.js request URL: ", baseUrl)
    return await apiClient.post(`/auth/login`, data);
  } catch (exception) {
    console.log(exception);
    return {
      error: true,
      exception
    }
  }
}

export const register = async (data) => {
  try {
    // console.log("api.js request client: ", apiClient)
    return await apiClient.post(`/auth/register`, data)
  } catch (exception) {
    console.log(exception);
    return {
      error: true,
      exception
    }
  }
}


// secure routes:

export const sendFriendRequest = async (data) => {
  try {
    return await apiClient.post("/friend-request/request", data);
  } catch (error) {
    checkResponseCode(error);
    return {
      error: true,
      error
    }
  }
}

const checkResponseCode = (exception) => {
  const responseCode = exception?.response?.status

  if(responseCode){
    (responseCode === 401 || responseCode === 403 ) && logout();
  }
}