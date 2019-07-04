import { connect } from 'react-redux';
import { createUser, loginUser, logoutUser } from '../../actions/session';
import Signin from './signin';

const mapStateToProps = (state, ownProps) => {
  const defaultUser = { email: '', fname: '', lname: '', password: '' };
  const user = this.state.props.users[ownProps.match.params.userId] || defaultUser;
  // how does ownProps receive userId?
  return { user };
};

const mapDispatchToProps = () => dispatch => ({
  createUser: (user) => dispatch(createUser(user)),
  loginUser: (user) => dispatch(loginUser(user)),
  logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);