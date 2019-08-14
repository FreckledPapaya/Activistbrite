import React from 'react';
import { Link } from 'react-router-dom';


class EventCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: this.props.event,
      currentUser: this.props.currentUser
    };
  }

  componentDidMount() {
    
  }

  render () {
    // return (
    //   <div>HELLO</div>
    // )

    return (
      <div className="create_event">
        <div className="create_event_header_container">
          <div className="create_event_header">
            <div className="create_event_text">
              <h2>Create An Event</h2>
            </div>
            <div className="create_event_publish">
              <div className="create_event_align_right">
                <div className="create_event_publish_button_cont">
                  <button className="create_event_publish_button">
                    <span>Publish</span>
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="create_event_navbar"></div>
        <div className="create_event_content">
          <form className="create_event_form">
            <div className="create_event_form_container1">
              <div className="create_event_form_container2">
                <div className="create_event_form_wrapper">
                  <div className="create_event_details_wrapper">
                    <div className="create_event_details_header">
                      <div className="create_event_details_header_cont">
                          <div className="create_event_header_wrapper">
                          <div className="create_event_header_text">
                              <span>1</span>
                              <h2>Event Details</h2>
                            </div>
                          </div>
                      </div>
                      <div className="create_event_header_line">
                        <hr/>
                      </div>
                    </div>
                    <div className="create_event_details_content">
                      <div className="create_event_details_title"></div>
                      <div className="create_event_details_title">
                        <div className="create_event_title_label_cont">
                          <label className="create_event_title_label">Event Title</label>
                        </div>
                        <div className="create_event_title_input_container">
                          <div className="create_event_input_text">
                            <input type="text" className="create_event_title_input"/>
                          </div>
                        </div>

                      </div>
                      <div className="create_event_details_date">
                        <div>
                          <div className="create_event_date_container">
                            <div className="create_event_start_date">
                              <label htmlFor="" className="create_event_date_label"></label>
                              <div className="create_event_date_input_container">
                                <div className="create_event_date_input">
                                  <input type="text"/>
                                </div>
                              </div>
                              <div className="create_event_date_input_container">
                                <div className="create_event_date_input">
                                  <input type="text"/>
                                </div>
                              </div>
                            </div>
                            <div className="create_event_end_date">
                              <label htmlFor="" className="create_event_date_label"></label>
                              <div className="create_event_date_input_container">
                                <div className="create_event_date_input">
                                  <input type="text"/>
                                </div>
                              </div>
                              <div className="create_event_date_input_container">
                                <div className="create_event_date_input">
                                  <input type="text"/>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="create_event_date_options"></div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="create_event_tickets"></div>
                  <div className="create_event_settings"></div>

                </div>

              </div>

            </div>
          </form>
          <div className="create_event_almost_done"></div>

        </div>
      </div>
    )
  }
}

export default EventCreate;