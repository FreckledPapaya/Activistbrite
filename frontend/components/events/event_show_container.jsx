import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { fetchEvent } from '../../actions/events_actions';
import EventShow from './event_show';

const mapStateToProps = (state, ownProps) => { 
    let event = state.entities.events[ownProps.match.params.eventId]; 
    return { event };
};

const mapDispatchToProps = () => dispatch => ({ 
    fetchEvent: (id) => dispatch(fetchEvent(id)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EventShow));