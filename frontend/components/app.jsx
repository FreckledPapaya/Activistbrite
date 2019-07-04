import React from 'react';
import { SignupContainer } from './session/signup_container';
// import components here

import { Route } form 'react-router-dom';
// AuthRoute/ProtectedRoute here

export default () => (
  <div>
    // <Route path="/" component={NavBarContainer} />
    <Route path="/signup" component={SignupContainer} />
    // <Route path="/login" component={LoginContainer} />
    // change to authroutes
    // <Route path="/events" component={EventIndexContainer} />
  </div>
);
