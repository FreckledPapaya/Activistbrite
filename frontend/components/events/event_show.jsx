import React from 'react';
import { Link } from 'react-router-dom';


class EventShow extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount() {
        let id = parseInt(this.props.match.params.eventId);
        this.props.fetchEvent(id);

    } 
    // to render body - parse for line breaks and next within p elements

    render () {
        if (!this.props.event) {
            return null;
        }

        const {event} = this.props;
        let dayAbbrev = event.start_day.slice(0, 3);
        let monAbbrev = event.start_month.slice(0, 3);
        let start_date_str =
            dayAbbrev + ", " + event.start_month + " " + event.start_date + ", " + event.start_year;
        let start_time_str; 
        if (event.end_time) {
            start_time_str = event.start_time + " - " + event.end_time;
        } else {
            start_time_str = event.start_time;
        }

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
                                        <p id="month">SEP</p>
                                        <p id="date">21</p>
                                    </div>
                                    <div className="event_listing_ta">
                                        <h1>{event.title}</h1>
                                        <div className="event_listing_org">
                                            <Link>by org</Link>
                                        </div>
                                    </div>
                                    <div className="event_listing_price_container">
                                        <div className="event_listing_price">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="event_listing_img"></div>
                        </div>
                        <div className="event_listing_panel_container">
                            <div className="event_listing_panel_placeholder"></div>
                            <div className="event_listing_panel">
                                <div className="event_listing_panel_buttons">
                                    <div className="event_listing_panel_like_button"></div>
                                    <div className="event_listing_panel_register_button"></div>
                                </div>
                            </div>
                        </div>
                        <section className="event_listing_info">
                            <div className="event_listing_info_border"></div>
                            <div className="event_listing_info_padding">
                                <div className="event_listing_info_contents">
                                    <div className="event_listing_info_description">
                                        
                                        <div className="event_listing_info_des_body">
                                            <h3>Description</h3>
                                            <div className="event_listing_info_des_text">
                                                <p>This is some text to see how a decription shows up and wraps around new lines of text.
                                                    Also to see new paragraphs render. (they dont show)
                                                </p>
                                                <p id="des_text">This is how a new paragraph will render.</p>

                                            </div>
                                        </div>
                                        <div className="event_listing_info_tags"></div>
                                    </div>
                                    <div className="event_listing_info_setting">
                                        <div className="event_listing_info_setting_hide">
                                            <h3>Date and Time</h3>
                                            <div className="event_details_date">
                                                <p>{start_date_str}</p>
                                                <p>{start_time_str}</p>
                                            </div>
                                            <h3>Location</h3>
                                            <div className="event_details_date">
                                                <p>San Francisco, CA</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )

    }
}

export default EventShow;