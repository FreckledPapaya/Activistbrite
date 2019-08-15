import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { createEvent } from '../../actions/events_actions';
import { fetchUser } from '../../actions/session_actions';
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
  return { event, currentUser };
};

const mapDispatchToProps = () => dispatch => ({
  createEvent: (event) => dispatch(createEvent(event)),
  fetchUser: (user) => dispatch(fetchUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EventCreate));