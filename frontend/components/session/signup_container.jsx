import { connect } from 'react-redux';
import { createUser, loginUser, logoutUser } from '../../actions/session';
import Signup from './signup';


const mapStateToProps = () => dispatch => {
  const defaultUser = {email: '', fname: '', lname: '', password: ''};

  return {user: defaultUser};
};

const mapDispatchToProps = () => dispatch => ({
  createUser: (user) => dispatch(createUser(user)),
  // loginUser: (user) => dispatch(loginUser(user)),
  // logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);