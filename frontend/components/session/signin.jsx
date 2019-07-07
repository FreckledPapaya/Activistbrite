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
      <div className="signin_container">

        <div className="session_form_header" id="signin_header">
          <div className="form_logo">
            Logo here
          </div>
          <div className="form_text">
            <h3>Let's get started</h3>
            <p>Use email to get started.</p>
          </div>
        </div>

        <form className="session_form" id="signin_form">
          <div className="session_input" id="signin_email_input">
            <label id='email'>
              <input type="text" name="Email address" value={this.state.email} onChange={this.update('email')} />
            </label>
          </div>
          <div className="session_submit_button">
            <button className="button_session_submit" onClick={this.handleClick}>
              Get Started
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Signin;