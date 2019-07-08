import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleClick = this.handleClick.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleClick (e) {
    e.preventDefault();
    this.props.receiveSigninProps(this.state);
  }


  render() {
    return (
      <div className="ssession_form_container">

        <div className="session_form_header" id="signin_header">
          <div className="session_form_logo">
            <i className="session_form_logo_i">
              <img src="" alt=""/>
              Logo here
            </i>
          </div>
          <div className="session_form_text_lg">
            <h3>Let's get started</h3> 
          </div>
          <div className="session_form_text_sm"> 
            <p>Use email to get started.</p>
          </div>
        </div>

        <div className="session_form_container" id="signin_form">
          <form className="session_form">
            <div className="session_input_container" id="signin_input">
              <div className="session_input_item_internal">
                <div className="session_input_label_wrapper">
                  <label id='email'>Email address</label>
                </div>
                <div className="session_input_field_wrapper"> 
                    <input type="email" name="Email address" value={this.state.email} onChange={this.update('email')} />
                </div>
              </div>
            </div>
            <div className="session_submit_button">
              <button className="button_session_submit" onClick={this.handleClick}>
                Get Started
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Signin;