import axios from 'axios';

export const publicApi = axios.create({
  baseURL: 'https://goit-task-manager.herokuapp.com/',
});

export const privateApi = axios.create({
  baseURL: 'https://goit-task-manager.herokuapp.com/',
});

export const token = {
  set(tokenValue) {
    privateApi.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${tokenValue}`;
  },
  unset() {
    privateApi.defaults.headers.Authorization = null;
  },
};
