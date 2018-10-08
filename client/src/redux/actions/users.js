import axios from 'axios';

const BASE_URL = `http://localhost:5000/api/users`;
export const LOGIN_URSER = `LOGIN_USER`;
export const loginUser = data => {
  const request = axios.post(`${BASE_URL}/login`, data).then(res => res.data);
  return {
    type: LOGIN_URSER,
    payload: request,
  };
};
