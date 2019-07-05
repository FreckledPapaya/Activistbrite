import React from 'react';
import Signin from './signin';
import Login from './login';
import Signup from './signup';

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.receiveSigninProps = this.receiveSigninProps.bind(this);
    this.receiveLoginProps = this.receiveLoginProps.bind(this);
    this.switchComponent = this.switchComponent.bind(this); 
    this.form = <Signin user={this.state} receiveSigninProps={this.receiveSigninProps}/>;
    
  }

  switchComponent() {
  if (this.props.session.newUser === true) { 
    this.form = <Signup user={this.state} email={this.props.session.email} receiveSignupProps={this.receiveSignupProps} />;
  } else {
    this.form = <Login user={this.state} email={this.props.session.email} receiveLoginProps={this.receiveLoginProps} />;
  }
  this.setState(this.state);
  }

  receiveSigninProps (user) {
    this.setState({user: user}); 
    this.props.fetchUser(user.email).then(() => {
      this.switchComponent();
    });  
  }

  receiveLoginProps (user) {

  }

  receiveSignupProps (user) {

  }
  
  render() { 
    return (
      <div className='SessionForm'>
        {this.form} 
      </div>
    )
  }
}

export default Session;