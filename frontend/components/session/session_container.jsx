import { connect } from "react-redux";
import { createUser, loginUser, logoutUser } from '../../actions/session';
import Session from './session';
 
 const mapStateToProps = (state) => {
   const defaultUser = {email: ''};
   const defaultFormType = 'Signup';

  // const formType = ownProps.formType || defaultFormType;
  return {formType: defaultFormType, user: defaultUser};
 };
 
 const mapDispatchToProps = () => dispatch => ({
   createUser: (user) => dispatch(createUser(user)),
    loginUser: (user) => dispatch(loginUser(user)),
    logoutUser: () => dispatch(logoutUser())
});

 export default connect(mapStateToProps, mapDispatchToProps)(Session);