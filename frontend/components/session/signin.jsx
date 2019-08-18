import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleClick = this.handleClick.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
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

  handleDemo (e) {
    e.preventDefault();  
    this.props.receiveLoginProps({ email: 'demouser@demo.com', password: "password" });
  }


  render() {
    return (
      <div className="session_container">

        <div className="session_form_header" id="signin_header">
          <div className="session_form_logo">
            <i className="session_form_logo_img">
              a
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
                  <input className="session_input" type="email" value={this.state.email} onChange={this.update('email')} /> 
              </div>
            </div>
            <div className="session_submit_button">
              <button className="button_session_submit" onClick={this.handleClick}>
                Get Started
              </button> 

              <div className="session_btwn_button_text"> 
                <span>or</span>
              </div> 

              <button className="button_session_submit" onClick={this.handleDemo}>
                Demo Login
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Signin;