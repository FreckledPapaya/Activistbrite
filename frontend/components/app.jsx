import React from 'react';
import SignupContainer from './session/signup_container';
// import components here

import { Route } from 'react-router-dom';
// AuthRoute/ProtectedRoute here

export default () => (
  <div>
    <Route path="/signup" component={SignupContainer} />
  </div>
);

// <Route path="/" component={NavBarContainer} />
// <Route path="/login" component={LoginContainer} />
// change to authroutes
// <Route path="/events" component={EventIndexContainer} />