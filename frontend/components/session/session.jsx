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
    this.form = <Signin user={this.state} receiveSigninProps={this.receiveSigninProps} receiveLoginProps={this.receiveLoginProps}/>;
    
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
      this.props.history.push('/signin');
      this.switchComponent();
    });  
  }

  receiveLoginProps (user) { 
    this.state = user;
    this.props.loginUser(this.state).then(() => this.props.history.push('/'));
  }

  receiveSignupProps (user) {
    this.setState({ user: user });
    this.props.createUser(this.state).then(() => this.props.history.push('/'));
  }
  
  render() { 
    return (
      <div className="main_container">
        <main >
          <div className="session_form_vert_layout">
            <div className="session_form_center_layout"> 
              {this.form}  
            </div>
          </div>
            
        </main> 
      </div>
    )
  }
}

export default Session;