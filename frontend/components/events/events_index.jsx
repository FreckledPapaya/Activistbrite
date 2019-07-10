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
            <div>
                {this.state}
            </div> 
        )
    }
}

export default EventsIndex;