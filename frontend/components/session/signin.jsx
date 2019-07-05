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
      <div className="Signin_container">

        <div className="Signin_header">
        <h3>Let's get started</h3>
        <p>Use email to get started.</p>
        </div>

        <form className="Signin_form">
          <label id='email'>
            <input type="text" name="Email address" value={this.state.email} onChange={this.update('email')} />
          </label>
          <button className="Session_button" onClick={this.handleClick}>Get Started</button>

        </form>
      </div>
    )
  }
}

export default Signin;