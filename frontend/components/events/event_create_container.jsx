import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { createEvent } from '../../actions/events_actions';
import { getUser } from '../../actions/session_actions';
import EventCreate from './event_create_form';

const mapStateToProps = (state) => {
  let event = {
    title: "",
    body: "",
    image_url: "",
    start_date: "",
    end_date: ""
  };
  let currentUser = state.session.currentUser;
  let user;
  if (state.entities.users[currentUser]) {
    user = state.entities.users[currentUser];
  } else {
    user = {};
  }
  return { event, currentUser, user };
};

const mapDispatchToProps = () => dispatch => ({
  createEvent: (event) => dispatch(createEvent(event)),
  getUser: (id) => dispatch(getUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EventCreate));