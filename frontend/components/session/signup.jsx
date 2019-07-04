import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSumbit(e) {
    e.preventDefault();
    this.props.createUser(this.state).then(() => this.props.history.push('/'));
  }


  render() {
    return (
      <div>
        <h3>Welcome</h3>
        <p>Create an account.</p>

        <form onSumbit={this.handleSumbit}>
          <label id='email'>
            <input type="text" name="Email address" value={this.state.email} onChange={this.update('email')}/>
          </label>
          <br />
          <label id='fname'>
            <input type="text" value={this.state.fname} onChange={this.update('fname')}/>
          </label>
          <br />
          <label id='lname'>
            <input type="text" value={this.state.lname} onChange={this.update('lname')}/>
          </label>
          <br />
          <label id='password'>
            <input type="password" value={this.state.password} onChange={this.update('password')}/>
            <p>Your password must be at least 8 characters</p>
          </label>
          <br />
          <input type="submit" value="Sign Up"/>
        
        </form>
      </div>)
  }
}
export default Signup;

// add link "Log In Instead" at bottom