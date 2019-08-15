import { combineReducers } from "redux";
import EventsReducer from './events_reducer';
import UsersReducer from './users_reducer';


export default combineReducers({
  events: EventsReducer,
  users: UsersReducer
});