import * as EventUtil from '../utils/event_util';

export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS';

const receiveEvent  = (event) => ({
  type: RECEIVE_EVENT,
  event
});

const receiveEvents  = (events) => ({
  type: RECEIVE_EVENTS,
  events
});

const removeEvent = (id) => ({
  type: REMOVE_EVENT,
  id
});

const receiveEventErrors  = (errors) => ({
  type: RECEIVE_EVENT_ERRORS,
  errors
});

export const fetchEvents = () => dispatch => {
  return EventUtil.fetchEvents()
    .then(events => dispatch(receiveEvents(events)),
    errors => dispatch(receiveEventErrors(errors))) 
};

export const fetchEvent = (id) => dispatch => {
  return EventUtil.fetchEvent(id)
    .then(event => dispatch(receiveEvent(event))),
    errors => dispatch(receiveEventErrors(errors));
};

export const createEvent = (event) => dispatch => {
  return EventUtil.postEvent(event)
  .then(event => dispatch(receiveEvent(event))),
    errors => dispatch(receiveEventErrors(errors));
};

export const updateEvent = (event) => dispatch => {
  return EventUtil.patchEvent(event)
  .then(event => dispatch(receiveEvent(event))),
    errors => dispatch(receiveEventErrors(errors));
};

export const deleteEvent = (id) => dispatch => {
  return EventUtil.deleteEvent(id)
  .then((id) => dispatch(removeEvent(id))),
    errors => dispatch(receiveEventErrors(errors));
};