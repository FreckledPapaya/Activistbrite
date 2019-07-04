import React from 'react';
import Signin from './signin';

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
  }
  
  render() {
    const form = <Signin formType='Signin' user={this.state}/>;

    // switch(this.props.formType){
    // case 'Sigin':
    //   form = <Login formType='Login'/>;
    // case 'Sigup':
    //   form = <Signup formType='Signup'/>;
    // default:
    //   form = <Signin formType='Signin'/>;
    // }

    return (
      <div>
        {form}
      </div>
    )
  }
}

export default Session;