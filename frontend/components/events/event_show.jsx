import React from 'react';
import { Link } from 'react-router-dom';


class EventShow extends React.Component {
    constructor (props) {
        super(props); 
        this.state = {
            currentUser: this.props.currentUser
        };
    }

    componentDidMount() {
        let id = this.props.match.params.eventId;
        this.props.fetchEvent(id);
        this.setState({event: event});
    } 

    render () {
        return (
            <div className="event_listing">
                <header className="event_listing_header">
                    header
                </header>
                <div className="event_listing_container">
                    <div className="event_listing_body">
                        <div className="event_listing_basics">
                            <div className="event_listing_img_container">
                                <img src={window.images.event_1} />
                            </div>
                            <div className="event_listing_overview">
                                <div className="event_listing_dta">
                                    <div className="event_listing_date">
                                        <p id="month">Sep</p>
                                        <p id="date">21</p>
                                    </div>
                                    <div className="event_listing_ta">
                                        <h1>Opera at the Ballpark General Admission</h1>
                                        <div className="event_listing_org">
                                            <Link>by San Francisco Opera</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="event_listing_price_container">
                                    <div className="event_listing_price">
                                        Price
                                    </div>
                                </div>
                            </div>
                            <div className="event_listing_img"></div>
                        </div>
                        <div className="event_listing_panel">Panel</div>
                        <div className="event_listing_info">
                            <div className="event_listing_info_border"></div>
                            <div className="event_listing_info_padding">
                                <div className="event_listing_info_contents">
                                    <div className="event_listing_info_decription">
                                        Description
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