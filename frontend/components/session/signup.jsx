import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props); 
    this.state = this.props.user; 
    this.email = this.props.email;
    this.handleClick = this.handleClick.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  } 

  handleClick(e) {
    e.preventDefault();
    this.props.receiveSignupProps(this.state);
  }


  render() {
    return (
      <div>
        <h3>Welcome</h3>
        <p>Create an account.</p>

        <form  >
          <label id='email'>
            <input type="text" name="Email address" value={this.email} onChange={this.update('email')}/>
            
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

          <button onClick={this.handleClick}>Sign Up</button>
        
        </form>
      </div>)
  }
}
export default Signup;

// add link "Log In Instead" at bottom