import React from 'react';
import { merge } from 'lodash';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.email = this.props.email;
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.state.email = this.props.email;
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleClick(e) {
    e.preventDefault();
    this.props.receiveLoginProps(this.state);
  }


  render() {
    return (
      <div className="session_container">

        <div className="session_form_header">
          <div className="session_form_logo">
            <i className="session_form_logo_i">
              <img src="" alt="" />
              Logo here
            </i>
          </div>
          <div className="session_form_text_lg">
            <h3>Welcome Back</h3>
          </div>
          <div className="session_form_text_sm">
            <p>Please enter your password to log in.</p>
          </div>
        </div>

        <div className="session_form_container" id="login_form">
          <form className="session_form">
            <div className="session_input_email_wrapper">
              <div className="session_input_email_disabled">
                <div className="session_input_email_label">
                  <label id='email'>Email Address</label>
                </div>
                <input type="email"  value={this.email} disabled />
              </div>
            </div>
            <div className="session_input_container" id="signin_input">
              <div className="session_input_item_internal"> 
                <div className="session_input_label_wrapper">
                  <label id='password'>Password</label>
                </div>
                <input type="password" name="Password" value={this.state.password} onChange={this.update('password')} />
              </div> 
            </div> 
            <div className="session_submit_button">
              <button className="button_session_submit" id="session_submit"  onClick={this.handleClick}>
                Log In
              </button>

            </div>
          </form>
        </div>

        
      </div>)
  }
}
export default Login;

// add link "Log In Instead" at bottom