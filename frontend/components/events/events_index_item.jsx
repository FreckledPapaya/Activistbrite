import React from 'react';
import { Link } from 'react-router-dom';

class EventsIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            event: this.props.event
        };
        this.dayAbbrev = this.state.event.start_day.slice(0, 3);
        this.monAbbrev = this.state.event.start_month.slice(0, 3);
        this.start_datetime =
            this.dayAbbrev + ", " + this.monAbbrev + " " + this.state.event.start_date + ", " + this.state.event.start_time;
        this.handleClick = this.handleClick.bind(this);
    }  

    componentDidMount () {
        let id = this.state.event.id;
        let path = '/events/' + id.toString();
        this.setState({path: path});
    }

    handleClick(e) {
        e.preventDefault();
        this.props.history.push(this.state.path);
    }

    render() {
        // let image_url = this.props.event.image_url;
        // debugger
        // let image_source = "window.images." + this.props.event.image_url;
        // debugger
        return (
            <div className="event_item_padding">
                <div className="event_item_container">
                    <Link to={this.state.path} className="event_index_item_link" >
                        <div className="event_item_image_container">
                            <img src={window.images.event_1} />
                        </div>
                        <div className="event_item_details_container">
                            <div className="event_item_details">
                                <div className="event_item_date">
                                    <div className="event_item_date_icon">
                                        <p className="event_item_date_month">{this.monAbbrev.toUpperCase()}</p>
                                        <p className="event_item_date_num">{this.state.event.start_date}</p>
                                    </div>
                                </div>
                                <div className="event_item_info">
                                    <div className="event_item_title">
                                        <h3>{this.state.event.title}</h3>
                                    </div>
                                    <div className="event_item_setting">
                                        <div className="event_item_time">{this.start_datetime}</div>
                                        <div className="event_item_location">San Francisco, CA</div>
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