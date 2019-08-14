import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { createEvent } from '../../actions/events_actions';
import EventCreate from './event_create_form';

const mapStateToProps = (state) => {
  let event = {
    id: "",
    title: "",
    body: "",
    start_date: ""
  };
  let currentUser = state.session.currentUser;
  return { event, currentUser };
};

const mapDispatchToProps = () => dispatch => ({
  createEvent: (event) => dispatch(createEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EventCreate));