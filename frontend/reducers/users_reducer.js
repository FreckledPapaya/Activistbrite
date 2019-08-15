import { RECEIVE_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const _emptyUser = {};

export default (state = _emptyUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, { [action.user.id]: action.user });
    default:
      return state;
  }
};