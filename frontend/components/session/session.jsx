import React from 'react';
import Signin from './signin';
import Login from './login';

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.receiveSigninProps = this.receiveSigninProps.bind(this);
    this.receiveLoginProps = this.receiveLoginProps.bind(this);
    this.findUser = this.findUser.bind(this);
    this.form = <Signin user={this.state} receiveSigninProps={this.receiveSigninProps}/>;
    
  }

  findUser(email) {
    let thisUser = null;
    mappedUsers.forEach(user => {
      if (user[email] === email) {
        thisUser = user;
      }
    });
    return thisUser;
  }

  receiveSigninProps (user) {
    this.setState({user: user});
    // let response;
    const response = this.props.fetchUser(user.email);
    console.log(`response: ${response}`);
    // if (repsonse === ['Require Signup']) {
    //   this.form = <Signup user={user} receiveSignupProps={this.receiveSignupProps} />;
    // } else {
      this.form = <Login user={user} receiveLoginProps={this.receiveLoginProps} />;
    // }
  }

  receiveLoginProps (props) {

  }

  receiveSignupProps (props) {

  }
  
  render() {
    let form; 
    // = <Signin formType='Signin' user={this.state}/>;

    // switch(this.props.formType){
    // case 'Signin':
    //   form = <Login formType='Login' user={this.state}/>;
    // // case 'Signup':
    // //   form = <Signup formType='Signup' user={this.state} />;
    // default:
    //   form = <Signin formType='Signin' user={this.state}/>;
    // }

    return (
      <div className='SessionForm'>
        {this.form}
      </div>
    )
  }
}

export default Session;