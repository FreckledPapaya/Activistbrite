import * as SessionUtil from '../utils/session_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_EMAIL = 'RECEIVE_EMAIL';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const receiveEmail = (user) => ({
  type: RECEIVE_EMAIL,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const createUser = (formUser) => dispatch => {
  return SessionUtil.createUser(formUser).then(user => dispatch(receiveUser(user)));
};

export const fetchUser = (email) => dispatch => {
  return SessionUtil.fetchUser(email).then(user => dispatch(receiveEmail(user)));
};

export const loginUser = (formUser) => dispatch => {
  return SessionUtil.createUser(formUser).then(user => dispatch(receiveUser(user)));
};

export const logoutUser = () => dispatch => {
  return SessionUtil.deleteSession().then(() => dispatch(logoutUser()));
};