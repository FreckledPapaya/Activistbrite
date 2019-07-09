import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

// reroutes to root if user is logged in (trying to log in when already logged in)
const Auth = ({component: Component, path, loggedIn}) => { 
return(
  <Route path={path} render={(props) => (
    loggedIn ? (
      <Redirect to='/' />
    ) : (
      <Component {...props} />
    )
  )} />)
};

// reroutes to root if user is not logged in (try to access protected page)
const Protected = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Redirect to='/' />
    ) : (
      <Component {...props} />
    )
  )} />
);

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));

