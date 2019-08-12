import React from 'react';
import { Link } from 'react-router-dom';

// const DAYS = {
//          1: 'Mon',
//          2: 'Tue',
//          3: 'Wed',
//          4: 'Thu',
//          5: 'Fri',
//          6: 'Sat',
//          0: 'Sun',
    
// };

// const MONTHS = {
//          1: 'January',
//          2: 'February',
//          3: 'March',
//          4: 'April',
//          5: 'May',
//          6: 'June',
//          7: 'July',
//          8: 'August',
//          9: 'September',
//          10: 'October',
//          11: 'November',
//          12: 'December'
// };

class EventsIndexItem extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            event: this.props.event
        };
        this.handleClick = this.handleClick.bind(this);
    }  

    componentDidMount () {
        let id = this.state.event.id;
        let path = '/events/' + id.toString();
        this.setState({path: path});

        let date = new Date(this.state.event.start_date);
        console.log(this.state.event.start_date);
        console.log(date);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.history.push(this.state.path);
    }

    render() {
        // let image_url = this.props.event.image_url;
        // debugger
        // let image_source = "window.images." + this.props.event.image_url;
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
                                        <p className="event_item_date_month">SEP</p>
                                        <p className="event_item_date_num">21</p>
                                    </div>
                                </div>
                                <div className="event_item_info">
                                    <div className="event_item_title">
                                        <h3>Opera at the Ballpark General Admission</h3>
                                    </div>
                                    <div className="event_item_setting">
                                        <div className="event_item_time">Sat, Sep 21, 7:30pm</div>
                                        <div className="event_item_location">Oracle Park, San Francisco, CA</div>
                                        <div className="event_item_price">Free</div> 
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