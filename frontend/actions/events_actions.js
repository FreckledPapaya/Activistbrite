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
  EventUtil.fetchEvents().then(events => dispatch(receiveEvents(events)));
};

export const fetchEvent = (id) => dispatch => {
  EventUtil.fetchEvent(id)
    .then(event => dispatch(receiveEvent(event))),
    errors => dispatch(receiveEventErrors(errors.responseJSON));
};

export const createEvent = (event) => dispatch => {
  EventUtil.postEvent(event)
  .then(event => dispatch(receiveEvent(event))),
    errors => dispatch(receiveEventErrors(errors.responseJSON));
};

export const updateEvent = (event) => dispatch => {
  EventUtil.patchEvent(event)
  .then(event => dispatch(receiveEvent(event))),
    errors => dispatch(receiveEventErrors(errors.responseJSON));
};

export const deleteEvent = (id) => dispatch => {
  EventUtil.deleteEvent(id)
  .then((id) => dispatch(removeEvent(id))),
    errors => dispatch(receiveEventErrors(errors.responseJSON));
};