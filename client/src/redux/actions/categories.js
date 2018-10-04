import axios from 'axios';

export const GET_ALL_CATEGORIES = `GET_ALL_CATEGORIES`;
const BASE_URL = `http://localhost:5000/api`;

export const getAllCategories = () => {
  const request = axios.get(`${BASE_URL}/categories`).then(res => res.data);
  return {
    type: GET_ALL_CATEGORIES,
    payload: request,
  };
};
