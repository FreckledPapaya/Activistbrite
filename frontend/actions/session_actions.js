import * as SessionUtil from '../utils/session_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_EMAIL = 'RECEIVE_EMAIL';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const receiveEmail = (user) => ({
  type: RECEIVE_EMAIL,
  user
});

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const createUser = (formUser) => dispatch => {
  return SessionUtil.createUser(formUser)
    .then(user => dispatch(receiveUser(user)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON)));
};

export const fetchUser = (email) => dispatch => { 
  return SessionUtil.fetchUser(email)
    .then(user => dispatch(receiveEmail(user)));
};

export const loginUser = (formUser) => dispatch => {
  return SessionUtil.createSession(formUser)
    .then(user => dispatch(receiveUser(user)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON)));
};

export const logoutUser = () => dispatch => {
  return SessionUtil.deleteSession()
    .then(() => dispatch(logoutCurrentUser()),
    errors => dispatch(receiveSessionErrors(errors.responseJSON)));
};