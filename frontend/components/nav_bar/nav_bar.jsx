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
      <div className="dropdown_profile">
        <button onClick={this.handleLogout}>Log out</button>  
      </div>
      // change to dropdown menu of person img
     : 
     <div className="signin_button">
       <Link to='/signin'>
         <span>Sign In</span>
      </Link> 
     </div>

    return (
      <div className="header_container"> 
        <div className="header_major">
          <Link to="/" className="logo_index_link">
            <div className="logo_index_img_container"> 
              <div className="logo_index_img"> 
                <img src={window.location.origin + '/eventbrite_e_logo.png'} alt=""/>
              </div>
            </div> 
          </Link>
        </div>
        <div className="global_nav_bar">  
          {button} 
        </div>  
      </div>
    )
  }
}

export default NavBar
// eventbrite logo links to root
// sign in button/sign out button
// add create event button with feature