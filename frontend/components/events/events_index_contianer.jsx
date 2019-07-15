import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { fetchEvent, fetchEvents, createEvent, updateEvent, deleteEvent } from '../../actions/events_actions';
import EventsIndex from './events_index';

const mapStateToProps = ({ entities }) => {   
    return { events: entities.events };  
};


const mapDispatchToProps = () => dispatch => ({ 
    fetchEvents: () => dispatch(fetchEvents()),
    // fetchEvent: (id) => dispatch(fetchEvent(id)),
    // createEvent: (event) => dispatch(createEvent(event)),
    // updateEvent: (event) => dispatch(updateEvent(event)),
    // deleteEvent: (id) => dispatch(deleteEvent(id)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EventsIndex));