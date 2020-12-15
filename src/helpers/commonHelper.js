import { KEY_AUTH } from 'config/contants';
import { customAlphabet } from 'nanoid';

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
