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

  handleClick(e) {
    e.preventDefault();
    // redirect to login
  }


  render() {
    return (
      <div>
        <h3>Let's get started</h3>
        <p>Create an account.</p>

        <form >
          <label id='email'>
            <input type="text" name="Email address" value={this.state.email} onChange={this.update('email')} />
          </label>

          <button onClick={this.handleClick}>Get Started</button>

        </form>
      </div>
    )
  }
}

export default Signin;