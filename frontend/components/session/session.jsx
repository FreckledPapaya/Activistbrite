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

  // update(field) {
  //   return (e) => {
  //     this.setState({[field]: e.target.value});
  //   };
  // }

  // handleClick(e) {
  //   e.preventDefault();
  //   if (this.formType === 'Signin') {
  //     if (this.findUser(this.state.email)) {
  //       this.form = <Login user={this.state} buttonName={this.buttonName} />;
  //     } 
  //     else {
  //       this.props.formType = 'Signup';
  //       this.props.buttonName = 'Sign Up';
  //     }
  //   } else  if (this.formType === 'Signup'){
  //     this.props.createUser(this.state).then(() => this.props.history.push('/'));
  //   }
  //   this.render();
  // }

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
    let response = this.props.fetchUser(user.email);
    console.log(`response: ${response}`);
    // if (this.findUser(user.email)) {
      this.form = <Login user={user} receiveLoginProps={this.receiveLoginProps} />;
    // }
  }

  receiveLoginProps (props) {

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