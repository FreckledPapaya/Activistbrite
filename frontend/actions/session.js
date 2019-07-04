import * as SessionUtil from '../utils/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const createUser = (formUser) => dispatch => {
  return SessionUtil.createUser(formUser).then(user => dispatch(receiveUser(user)));
};

// export const fetchUser = (id) => dispatch => {
//   return SessionUtil.fetchUser(id).then(user => dispatch(receiveUser(user)));
// };

export const loginUser = (formUser) => dispatch => {
  return SessionUtil.createUser(formUser).then(user => dispatch(receiveUser(user)));
};

export const logoutUser = () => dispatch => {
  return SessionUtil.deleteSession().then(() => dispatch(logoutUser()));
};