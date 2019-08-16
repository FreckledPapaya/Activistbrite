import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      email: this.props.email,
      fname: "",
      lname: "",
      password: "" 
    }; 
    this.handleClick = this.handleClick.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.state.email = this.props.email;
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  } 

  handleClick(e) {
    e.preventDefault();
    this.props.receiveSignupProps(this.state);
  }

  handleRedirect(e) {
    e.preventDefault();
    this.props.loginRedirect();
  }


  render() {
    // for email confirmation
    // <div className="session_input_container" id="signin_input">
    //   <div className="session_input_item_internal">
    //     <div className="session_input_label_wrapper">
    //       <label id='email'>No function yet</label>
    //     </div>
    //     <input type="email" value={this.state.email2} onChange={this.update('email2')} />
    //   </div>
    // </div>


    return (
      <div className="session_container">

        <div className="session_form_header">
          <div className="session_form_logo">
            <i className="session_form_logo_img">
              a
            </i>
          </div>
          <div className="session_form_text_lg">
            <h3>Welcome</h3>
          </div>
          <div className="session_form_text_sm">
            <p>Create an account.</p>
          </div> 
        </div>

        <div className="session_form_container" id="signup_form">
          <form className="session_form">
            <div className="session_input_email_wrapper">
              <div className="session_input_email_disabled"> 
                <div className="session_input_email_label">
                  <label id='email'>Email Address</label>
                </div>
                <input id="session_input" type="email" value={this.state.email} disabled />
              </div>
            </div>

            

            <div className="session_input_container" id="signup_input">
              <div className="session_input_item_internal"> 
                <div className="session_input_label_wrapper">
                  <label id='fname'>First Name</label> 
                </div>
                <input id="session_input" type="text" value={this.state.fname} onChange={this.update('fname')} />
              </div>
            </div>

            <div className="session_input_container" id="signup_input">
              <div className="session_input_item_internal"> 
                <div className="session_input_label_wrapper">
                  <label id='lname'>Last Name</label> 
                </div>
                <input id="session_input" type="text" value={this.state.lname} onChange={this.update('lname')} />
              </div>
            </div>

            <div className="signup_password_container">
              <div className="session_input_container">
                <div className="session_input_item_internal">  
                  <div className="session_input_label_wrapper">
                    <label id='password'>Password</label>
                  </div>
                  <input id="session_input" type="password" value={this.state.password} onChange={this.update('password')}/>
                </div>
              </div> 
              <div className="session_form_line"></div>
              <div className="password_length">
                <p>Your password must be at least 8 characters</p>
              </div>
            </div>
            <div className="session_button_submit">
              <button className="button_session_submit" onClick={this.handleClick}>Sign Up</button>
            </div>
          </form> 
          <div className="session_form_login_link">
            <Link to="/signin" onClick={this.handleRedirect}>Log In Instead</Link>
          </div>
        </div>
        
        
      </div>)
  }
}
export default Signup;

// add link "Log In Instead" at bottom