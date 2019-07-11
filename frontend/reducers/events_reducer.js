import { RECEIVE_EVENT, RECEIVE_EVENTS, REMOVE_EVENT } from '../actions/events_actions';
import { merge } from 'lodash';

 const _emptyEvents = {};

export default (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_EVENTS: 
      return merge({}, action.events);
    case RECEIVE_EVENT: 
      return merge({}, state, {[action.event.id]: action.event});
    case REMOVE_EVENT: 
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};