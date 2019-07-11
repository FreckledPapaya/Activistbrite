import React from 'react';

class EventShow extends React.Component {
    constructor (props) {
        super(props);  
    }

    componentDidMount() {
        let id = this.props.match.params.eventId;
        this.props.fetchEvent(id);
    } 

    render () {
        return (
            <div className="event_listing">
                <header className="event_list_header">

                </header>
                <div className="event_listing_container">
                    <div className="event_listing_body">
                        <div className="event_listing_basics"></div>
                        <div className="event_listing_panel"></div>
                        <div className="event_listing_info">
                            <div className="event_listing_info_border"></div>
                            <div className="event_listing_info_padding">
                                <div className="event_listing_info_contents">
                                    <div className="event_listing_info_decription">

                                    </div>
                                    <div className="event_listing_info_setting">
                                        <h3>Date and Time</h3>
                                        <div className="event_details_date"></div>
                                        <h3>Location</h3>
                                        <div className="event_details_location"></div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default EventShow;