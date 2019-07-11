import React from 'react';

class EventsIndexItem extends React.Component {
    constructor(props) {
        super(props); 
        this.state = this.props.event;
    }  

    render() {
        return (
            <div>
                <ul>
                    <li>{this.state.title}</li>
                    <li>{this.state.body}</li>
                    <li>{this.state.organizer_title}</li>
                    <li>{this.state.start_date}</li>
                </ul>
            </div>
        ) 
    }
}

export default EventsIndexItem;