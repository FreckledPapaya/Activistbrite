import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSumbit(e) {
    e.preventDefault();
    this.props.loginUser(this.state).then(() => this.props.history.push('/'));
  }


  render() {
    return (
      <div>
        <h3>Let's get started</h3>
        <p>Create an account.</p>

        <form onSumbit={this.handleSumbit}>
          <label id='email'>
            <input type="text" name="Email address" value={this.state.email} onChange={this.update('email')} />
          </label>
          <br />
          <label id='password'>
            <input type="password" name="Password" value={this.state.password} onChange={this.update('password')} />
          </label>

          <input type="submit" value="Log In" />

        </form>
      </div>)
  }
}
export default Signin;