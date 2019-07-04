import { connect } from 'react-redux';
import { createUser, loginUser, logoutUser } from '../../actions/session';
import { Signup } from './signup';


const mapDispatchToProps = () => dispatch => ({
  createUser: (user) => dispatch(createUser(user)),
  // loginUser: (user) => dispatch(loginUser(user)),
  // logoutUser: () => dispatch(logoutUser())
});

export default connect(null, mapDispatchToProps)(Signup);