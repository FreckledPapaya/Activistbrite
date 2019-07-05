import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.email = this.props.email;
    // this.handleSumbit = this.handleSumbit.bind(this);
  }


  // handleSumbit(e) {
  //   e.preventDefault();
  //   this.props.loginUser(this.state).then(() => this.props.history.push('/'));
  // }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }



  render() {
    return (
      <div>
        <h3>Welcome back</h3>
        <p>Please enter your password to log in.</p>

        <form>
          <label id='email'>
            <input type="text" name="Email address" value={this.email} onChange={this.update('email')} />
          </label>
          <br />
          <label id='password'>
            <input type="password" name="Password" value={this.state.password} onChange={this.update('password')} />
          </label>

        </form>
      </div>)
  }
}
export default Login;

// add link "Log In Instead" at bottom