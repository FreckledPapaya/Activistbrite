import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.loggedIn = Boolean(this.props.currentUser);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logoutUser().then(() => this.props.history.push('/'));
    // where to push?
  }

  render () {
    const button = this.loggedIn ? 

      <button onClick={this.handleLogout}>Log out</button>
     : 
      <Link to='/signin'>Sign In</Link>

    return (
      <div className="global_nav_bar">
        <div className="logo">
          Logo here
        </div>
        <div className="navbar_buttons">
          <div className="session_buttons">
            {button}
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar
// eventbrite logo links to root
// sign in button/sign out button
// add create event button with feature