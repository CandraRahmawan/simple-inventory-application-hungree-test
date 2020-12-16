import qs from 'qs';
import { customAlphabet } from 'nanoid';
import { KEY_AUTH } from 'config/contants';

export const getAuth = () => {
  const authData = localStorage.getItem(KEY_AUTH);
  let auth = {};
  if (authData) {
    auth = JSON.parse(authData);
  }
  return auth;
};

export const getGenerateId = () => {
  const nanoid = customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ', 6);
  return nanoid();
};

export const getQueryId = (location) => {
  let getId = '';
  if (location.search) {
    getId = qs.parse(location.search.replace('?', '')).id;
  }
  return getId;
};
