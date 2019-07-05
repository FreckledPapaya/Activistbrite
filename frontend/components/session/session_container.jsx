import { connect } from "react-redux";
import { createUser, loginUser, logoutUser, fetchUser } from '../../actions/session_actions';
import Session from './session';
 
const mapStateToProps = ({ session }) => {
  const defaultUser = {email: '', password: '', fname: '', lname: ''};  
  return { user: defaultUser , session };
 };
 
const mapDispatchToProps = () => dispatch => ({
  createUser: (user) => dispatch(createUser(user)),
  fetchUser: (email) => dispatch(fetchUser(email)),
  loginUser: (user) => dispatch(loginUser(user)),
  logoutUser: () => dispatch(logoutUser())
});

 export default connect(mapStateToProps, mapDispatchToProps)(Session);