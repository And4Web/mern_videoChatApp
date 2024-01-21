import axios from 'axios';

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const apiClient = axios.create({
  baseUrl,
  timeout: 1000
})

export const login = async (data) => {
  try {
    return await apiClient.post('/auth/login', data);
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
    return await apiClient.post('/auth/register', data)
  } catch (exception) {
    console.log(exception);
    return {
      error: true,
      exception
    }
  }
}