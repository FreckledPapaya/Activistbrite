import React from 'react';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
// import components here

import { Route } from 'react-router-dom';
// AuthRoute/ProtectedRoute here

export default () => (
  <div>
    <Route exact path="/signin" component={SigninContainer} />
    <Route exact path="/signin/signup" component={SignupContainer} />
    <Route exact path="/signin/login" component={LoginContainer} />
  </div>
);

// <Route path="/" component={NavBarContainer} />
// <Route path="/login" component={LoginContainer} />
// change to authroutes
// <Route path="/events" component={EventIndexContainer} />