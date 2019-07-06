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
      <div className="login_container">

        <div className="login_header">
        <h3>Welcome back</h3>
        <p>Please enter your password to log in.</p>
        </div>

        <form className="login_form">
          <label id='email'>
            <input type="text" name="Email address" value={this.email} disabled />
          </label>
          <br />
          <label id='password'>
            <input type="password" name="Password" value={this.state.password} onChange={this.update('password')} />
          </label>
          <br />
        </form>

        <button className="Session_button" id="session_submit"  onClick={this.handleClick}>Log In</button>
        
      </div>)
  }
}
export default Login;

// add link "Log In Instead" at bottom