import React from 'react';

class EventsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.events;
    }

    componentDidMount () {
        this.props.fetchEvents();
    }


    render() {

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
                            Import items here
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventsIndex;