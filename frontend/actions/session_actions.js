import * as SessionUtil from '../utils/session_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const createUser = (formUser) => dispatch => {
  return SessionUtil.createUser(formUser).then(user => dispatch(receiveUser(user)));
};

export const fetchUsers = () => dispatch => {
  return SessionUtil.fetchUsers().then(users => dispatch(receiveUsers(users)));
};

export const loginUser = (formUser) => dispatch => {
  return SessionUtil.createUser(formUser).then(user => dispatch(receiveUser(user)));
};

export const logoutUser = () => dispatch => {
  return SessionUtil.deleteSession().then(() => dispatch(logoutUser()));
};