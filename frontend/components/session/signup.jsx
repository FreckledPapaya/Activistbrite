import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props); 
    this.state = this.props.user; 
    this.email = this.props.email;
    this.handleClick = this.handleClick.bind(this);
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


  render() {
    return (
      <div className="session_container">

        <div className="session_form_header">
          <div className="session_form_logo">
            <i className="session_form_logo_i">
              <img src="" alt="" />
              Logo here
            </i>
          </div>
          <div className="session_form_text_lg">
            <h3>Welcome</h3>
          </div>
          <div className="session_form_text_sm">
            <p>Create an account.</p>
          </div> 
        </div>

        <div className="session_form_container">
          <div className="session_imput_email_disabled"> 
            <label id='email'>Email Address</label>
            <input type="text" name="Email address" value={this.email} disabled />
          </div>

          <form className="session_form">
            <div className="session_input_container" id="signup_input">
              <div className="session_input_item_internal"> 
                <div className="session_input_label_wrapper">
                  <label id='fname'>First Name</label> 
                </div>
                <input type="text" value={this.state.fname} onChange={this.update('fname')} />
                
                <div className="session_input_label_wrapper"> 
                  <label id='lname'>Last Name</label>
                </div>
                <input type="text" value={this.state.lname} onChange={this.update('lname')}/>

              </div>

              <div className="session_input_item_internal">  
                <div className="session_input_label_wrapper">
                  <label id='password'>Password</label>
                </div>
                <input type="password" value={this.state.password} onChange={this.update('password')}/>
                <p>Your password must be at least 8 characters</p>
              </div>
            </div>        
            <div className="session_button_submit">
              <button className="button_session_submit" onClick={this.handleClick}>Sign Up</button>
            </div>
          </form> 
     
        </div>
        
        
      </div>)
  }
}
export default Signup;

// add link "Log In Instead" at bottom