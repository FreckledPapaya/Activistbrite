import React from 'react';
import EventsIndexItem from './events_index_item';

class EventsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.events;
    }

    componentDidMount () {
        this.props.fetchEvents();
    }


    render() {
        // const events = Object.keys(this.state).map(id => this.state[id]);
        // const eventItems = events.map(event => {
        //     <EventsIndexItem event={event} />
        // });

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

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventsIndex;