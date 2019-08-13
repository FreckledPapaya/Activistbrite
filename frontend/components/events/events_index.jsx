import React from 'react';
import EventsIndexItem from './events_index_item';

class EventsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: this.props.events
        };
    }

    componentDidMount () {
        this.props.fetchEvents(); 
    }


    render() { 
        const events = Object.keys(this.props.events).map(id => this.props.events[id]);
        const eventItems = events.map((event,i) => {
            return (<EventsIndexItem event={event} key={i} />);
        });
        
        return (
            <div className="best_life">
                <div className="best_life_content">
                    <div className="best_life_header">
                        <div className="best_life_header_title">
                            <h1>Live your best life</h1>
                        </div> 
                    </div> 
                    <div className="best_life_results">
                        <div className="homepage_events_section">
                            { eventItems }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventsIndex;