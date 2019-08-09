import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { fetchEvent } from '../../actions/events_actions';
import EventShow from './event_show';

const mapStateToProps = (state, ownProps) => { 
    event = state.entities.events[ownProps.match.params.eventId];
    // currentUser = state.session.currentUser;
    return { event };
};

const mapDispatchToProps = () => dispatch => ({ 
    fetchEvent: (id) => dispatch(fetchEvent(id)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EventShow));