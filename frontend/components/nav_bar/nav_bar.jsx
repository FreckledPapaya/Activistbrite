import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSignin = this.handleSignin.bind(this);
    this.currentUser = this.props.currentUser;
  }

  handleLogout(e) {
    e.preventDefault();
    
  }

  handleSignin(e) {
    e.preventDefault();
    
  }

  render () {
    const button = this.currentUser ? (
      <button onClick={handleLogout}>Log out</button>

    ) : (
        <button onClick={handleSignin}>Sign In</button>
    )
  }


    return (
      <div className="global_header">
        {button}
      </div>
    )
  }
}

// eventbrite logo links to root
// sign in button/sign out button
// add create event button with feature