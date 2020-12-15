import { KEY_AUTH } from 'config/contants';

export const getAuth = () => {
  const authData = localStorage.getItem(KEY_AUTH);
  let auth = {};
  if (authData) {
    auth = JSON.parse(authData);
  }
  return auth;
};
