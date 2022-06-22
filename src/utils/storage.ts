const LOCALSTORAGE_KEY = {
  userInfo: 'SPEECH_USER_INFO',
  token: 'SPEECH_USER_TOKEN',
};

let _token = localStorage.getItem(LOCALSTORAGE_KEY.token) || '';
export const getToken = () => {
  _token = _token || localStorage.getItem(LOCALSTORAGE_KEY.token) || '';
  return _token;
};

export const setToken = (token: string) => {
  _token = token || '';
  localStorage[LOCALSTORAGE_KEY.token] = _token;
};

export const clearToken = () => {
  _token = '';
  localStorage.removeItem(LOCALSTORAGE_KEY.token);
};

export const getUserInfo = () => {
  try {
    return JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY.userInfo) || '') || {};
  } catch (error) {
    return {};
  }
};

export const setUserInfo = (userInfo: PLATFORM.platformIamUserInfo) => {
  localStorage[LOCALSTORAGE_KEY.userInfo] = JSON.stringify(userInfo);
};

export const clearUserInfo = () => {
  localStorage.removeItem(LOCALSTORAGE_KEY.userInfo);
};

export const clearLocalStorage = () => {
  clearToken();
  clearUserInfo();
};
