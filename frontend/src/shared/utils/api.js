import axios from 'axios';

const baseUrl = process.env.REACT_APP_BACKEND_URL;

// const apiClient = axios.create({
//   baseUrl,
//   timeout: 1000
// })

export const login = async (data) => {
  try {
    // console.log("api.js request URL: ", baseUrl)
    return await axios.post(`${baseUrl}/auth/login`, data);
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
    return await axios.post(`${baseUrl}/auth/register`, data)
  } catch (exception) {
    console.log(exception);
    return {
      error: true,
      exception
    }
  }
}