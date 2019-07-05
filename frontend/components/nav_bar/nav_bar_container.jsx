import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logoutUser } from '../../actions/session_actions';
import NavBar from './nav_bar';

const mapStateToProps = ({ session }) => {
  return {currentUser: session.currentUser};
};

const mapDispatchToProps = () => (dispatch) => ({
  logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));