import React from 'react';
import { Link } from 'react-router-dom';


class EventShow extends React.Component {
    constructor (props) {
        super(props); 
        this.state = {
            event: this.props.event
        };
    }

    componentDidMount() {
        let id = parseInt(this.props.match.params.eventId);
        this.props.fetchEvent(id);
        this.setState({ event: event });
        // this.dayAbbrev = this.state.event.start_day.slice(0, 3);
        // this.monAbbrev = this.state.event.start_month.slice(0, 3);
        // this.start_datetime =
        //     this.dayAbbrev + ", " + this.monAbbrev + " " + this.state.event.start_date + ", " + this.state.event.start_time;
    } 
    // to render body - parse for line breaks and next within p elements

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
                                    <div className="event_listing_price_container">
                                        <div className="event_listing_price">
                                            Price
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
                                                <p>Sat, September 21, 2019</p>
                                                <p>7:30 PM – 10:30 PM PDT</p>
                                            </div>
                                            <h3>Location</h3>
                                            <div className="event_details_date">
                                                <p>Oracle Park</p>
                                                <p>24 Willie Mays Plaza </p>
                                                <p>San Francisco, CA 94107 </p>
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