import { connect } from 'react-redux';
import { createUser, loginUser, logoutUser } from '../../actions/session';
import Login from './login';

const mapStateToProps = ({ users }, ownProps) => {
  const defaultUser = { email: ownProps.email, password: '' };
  return { user: defaultUser };
};

const mapDispatchToProps = () => dispatch => ({
  createUser: (user) => dispatch(createUser(user)),
  loginUser: (user) => dispatch(loginUser(user)),
  logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);