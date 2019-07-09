import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_EMAIL } from '../actions/session_actions';
import { merge } from 'lodash';

const _nullSession = {
  currentUser: null 
};

export default (state = _nullSession, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER: 
      return merge ({}, { currentUser: action.user.id });
    case RECEIVE_EMAIL: 
      return merge({}, {currentUser: null, email: action.user.email, newUser: action.user.new_user});
      // camelCase
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
};