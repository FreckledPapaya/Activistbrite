import React from 'react';
import SessionContainer from './session/session_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import FooterContainer from './footer/footer';
import EventsIndexContainer from './events/events_index_contianer';
// import components here

import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';


export default () => (
  <div id="root">
    <Route path="/" component={NavBarContainer} />
    <Route exact path="/" component={EventsIndexContainer} />

    <AuthRoute path="/signin" component={SessionContainer} />

    <Route path="/" component={FooterContainer} /> 
  </div>
);
 