import React from 'react';
import SessionContainer from './session/session_container';
// import components here

import { Route } from 'react-router-dom';
// AuthRoute/ProtectedRoute here

export default () => (
  <div>
    <Route path="/signin" component={SessionContainer} />

  </div>
);

// <Route exact path="/signin/signup" component={SignupContainer} />
//   <Route exact path="/signin/login" component={LoginContainer} />