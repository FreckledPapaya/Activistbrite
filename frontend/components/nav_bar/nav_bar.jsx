import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSignin = this.handleSignin.bind(this);
    this.currentUser = this.props.currentUser;
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.history.push('/'));
    // where to push?
  }

  handleSignin(e) {
    e.preventDefault();
    // redirect to sign in pages
  }

  render () {
    const button = this.currentUser ? (
      <button onClick={handleLogout}>Log out</button>
    ) : (
        <Link to='/signin'>Sign In</Link>
    )
  }


    return (
      <div className="Global_nav_bar">
        {button}
      </div>
    )
  }
}

// eventbrite logo links to root
// sign in button/sign out button
// add create event button with feature