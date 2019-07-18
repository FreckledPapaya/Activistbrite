import React from 'react';
import { Link } from 'react-router-dom';
// import EventbriteLogo from '../../../app/assets/images/eventbrite_logo.png';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this); 
    this.loggedIn = Boolean(this.props.currentUser); 
  }
 
  // componentDidMount() {
  //   this.loggedIn = Boolean(this.props.currentUser);  
  // }
  componentDidUpdate() {
    this.loggedIn = Boolean(this.props.currentUser);  
  }

  handleLogout(e) { 
    e.preventDefault();
    this.props.logoutUser().then(() => this.props.history.push('/')); 
  }

  //  <img src={window.images.logo1} alt="" />

  render () {
    const button = this.loggedIn ? 
      <div >
        <button  className="dropdown_profile" onClick={this.handleLogout}>Log out</button>  
      </div>
      // change to dropdown menu of person img
     : 
     <div >
       <Link className="signin_button" to='/signin'>
         <span>Sign In</span>
      </Link> 
     </div>

    return (
      <div className="header_container"> 
        <div className="header_major">
          <Link to="/" className="logo_index_link">
            <div className="logo_index_img_container"> 
              <b className="logo_index_img"> 
                activistbrite
              </b>
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