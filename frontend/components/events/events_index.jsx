import React from 'react';
import EventsIndexItem from './events_index_item';

class EventsIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount () {
        this.props.fetchEvents(); 
        this.setState({ events: this.props.events });
    }


    render() { 
        const events = Object.keys(this.props.events).map(id => this.props.events[id]);
        const eventItems = events.map(event => {
            return (<EventsIndexItem event={event} />);
        });
        
        return (
            <div className="best_life">
                <div className="best_life_content">
                    <div className="best_life_header">
                        <div className="best_life_header_title">
                            <h1>Live Your Best Life</h1>
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