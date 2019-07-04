import { connect } from "react-redux";
import { createUser, loginUser, logoutUser, fetchUsers } from '../../actions/session_actions';
import Session from './session';
 
 const mapStateToProps = (state) => {
   const defaultUser = {email: '', password: '', fname: '', lname: ''};
   const defaultEmail = {email: ''};

  return { user: defaultUser, email: defaultEmail };
 };
 
 const mapDispatchToProps = () => dispatch => ({
  createUser: (user) => dispatch(createUser(user)),
  fetchUsers: () => dispatch(fetchUsers()),
  loginUser: (user) => dispatch(loginUser(user)),
  logoutUser: () => dispatch(logoutUser())
});

 export default connect(mapStateToProps, mapDispatchToProps)(Session);