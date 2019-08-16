import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { createUser, loginUser, fetchUser } from '../../actions/session_actions';
import Session from './session';
 
const mapStateToProps = (state) => {
  const defaultUser = {
    email: '', password: '', fname: "", lname: ""  };  
  return { user: defaultUser , session: state.session };
 };
 
const mapDispatchToProps = () => dispatch => ({
  createUser: (user) => dispatch(createUser(user)),
  fetchUser: (email) => dispatch(fetchUser(email)),
  loginUser: (user) => dispatch(loginUser(user))
});

 export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Session));