import React from 'react';
import { Link } from 'react-router-dom';


class EventCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.event.title,
      body: this.props.event.body,
      image_url: this.props.event.image_url,
      start_date: this.props.event.start_date,
      end_date: this.props.event.end_date,
      organizer_id: this.props.currentUser
    }; 
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() { 

  }

  update(field) {
    return (e)=> {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit (e) {
    e.preventDefault();
    let formData = new FormData();

    formData.append('event[title]', this.state.title);
    formData.append('event[body]', this.state.body);
    formData.append('event[image_url]', this.state.image_url);
    formData.append('event[start_date]', this.state.start_date);
    formData.append('event[end_date]', this.state.end_date);
    formData.append('event[photo_file]', this.state.photo_file);

    this.props.createEvent(formData).then((item) => {
      this.props.history.push(`/events/${item.event.id}`);
    });
  }

  handleFile (e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader ();
    fileReader.onloadend = () => {
      this.setState({photo_file: file, image_url: fileReader.result});
    };

    if (file) {
      fileReader.readAsDataURL(file);
    };
  }

  render () {
    if (!this.state.organizer_title){
      return null;
    }

    return (
      <div className="create_event">
        <div className="create_event_header_container">
          <div className="create_event_header">
            <div className="create_event_text">
              <h2>Create an Event</h2>
            </div>
            <div className="create_event_publish">
              <div className="create_event_align_right">
                <div className="create_event_publish_button_cont">
                  <button onClick={this.handleSubmit} className="create_event_publish_button">
                    <span>Publish</span>
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="create_event_navbar"></div>
        <div className="create_event_content">
          <form className="create_event_form" >
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
                          <div className="session_input_item_internal">
                            <input type="text" value={this.state.title} onChange={this.update('title')} className="create_event_title_input"/>
                          </div>
                        </div>

                      </div>
                      <div className="create_event_details_date">
                        <div>
                          <div className="create_event_date_container">
                            <div className="create_event_start_date">
                              <label htmlFor="" className="create_event_date_label">Starts</label>
                              <div className="create_event_date_input_container">
                                <div className="create_event_date_input">
                                  <input id="event_start_date" type="text"/>
                                </div>
                                <div className="create_event_date_input">
                                  <input id="event_start_time" type="text"/>
                                </div>
                              </div>
                            </div>
                            <div className="create_event_start_date">
                              <label htmlFor="" className="create_event_date_label">Ends</label>
                              <div className="create_event_date_input_container">
                                <div className="create_event_date_input">
                                  <input id="event_start_date" type="text" />
                                </div>
                                <div className="create_event_date_input">
                                  <input id="event_start_time" type="text" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="create_event_date_options"></div>
                        </div>
                      </div>

                      <div className="create_event_details_image">
                        <div className="create_event_image_title">
                          <h3>Event Image</h3>
                        </div>
                        <div className="create_event_image_input_cont">
                          <div className="create_event_image_input">
                            <input type="file" onChange={this.update('iamge_url')}/>
                          </div>
                          <div className="create_event_image_rec">
                            <span>We recommend using at least a 2160x1080px (2:1 ratio) image that's no larger than 10MB.</span>
                          </div>
                        </div>
                      </div>

                      <div className="create_event_details_image">
                        <div className="create_event_image_title">
                          <h3>Event Description</h3>
                        </div>
                        <div className="create_event_title_input_container">
                          <div className="create_event_body_input_border">
                            <input type="text" value={this.state.body} className="create_event_body_input" onChange={this.update('body')} />
                          </div>
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
          <div className="create_event_makelive_callout">
            <div className="create_event_makelive_cont">
              <div className="create_event_makelive_header">Nice job! You're almost done.</div>
              <div className="create_event_makelive_wrapper">
                <div className="create_event_makelive_button_cont">
                  <button onClick={this.handleSubmit}>Make Your Event Live</button>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default EventCreate;