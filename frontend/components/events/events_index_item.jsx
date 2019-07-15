import React from 'react';
import { Link } from 'react-router-dom';

class EventsIndexItem extends React.Component {
    constructor(props) {
        super(props); 
        this.state = this.props.event;
    }  

    render() {
        // let image_url = this.props.event.image_url;
        // debugger
        // let image_source = "window.images." + this.props.event.image_url;
        return (
            <div className="event_item_padding">
                <div className="event_item_container">
                    <Link to='/'>
                        <div className="event_item_image_container">
                            <img src={window.images.event_1} />
                        </div>
                        <div className="event_item_details_container">
                            <div className="event_item_details">
                                <div className="event_item_date">
                                    <div className="event_item_date_icon">
                                        <p>Month</p>
                                        <p>Date</p>
                                    </div>
                                </div>
                                <div className="event_item_info">
                                    <div className="event_item_title"></div>
                                    <div className="event_item_setting">
                                        <div className="event_item_time"></div>
                                        <div className="event_item_location"></div>
                                        <div className="event_item_price"></div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )    
        // <ul>
        //     <li>{this.state.title}</li>
        //     <li>{this.state.body}</li>
        //     <li>{this.state.organizer_title}</li>
        //     <li>{this.state.start_date}</li>
        // </ul>
    }
}

export default EventsIndexItem;