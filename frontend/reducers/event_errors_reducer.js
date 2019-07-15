import { RECEIVE_EVENT_ERRORS } from '../actions/events_actions';

const eventErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_EVENT_ERRORS: 
      return action.errors;
    default:
      return state;
  } 
};

export default eventErrorsReducer;