import { connect } from 'react-redux';
import { createUser, loginUser, logoutUser } from '../../actions/session';
import Signin from './signin';

const mapStateToProps = (state, ownProps) => {
  const defaultUser = { email: '' };
  return { user: defaultUser };
};

const mapDispatchToProps = () => dispatch => ({
  createUser: (user) => dispatch(createUser(user)),
  loginUser: (user) => dispatch(loginUser(user)),
  logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);