import React from 'react';
import SessionContainer from './session/session_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import FooterContainer from './footer/footer';
import EventsIndexContainer from './events/events_index_contianer';
import EventShowContainer from './events/event_show_container';
import EventCreateContainer from './events/event_create_container';
// import components here

import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';


export default () => (
  <div id="root2">
    <Route path="/" component={NavBarContainer} /> 
    <Switch>
      <AuthRoute path="/signin" component={SessionContainer} />
      <Route exact path="/events/:eventId" component={EventShowContainer} /> 
      <ProtectedRoute exact path="/create" component={EventCreateContainer} /> 
      <Route path="/" component={EventsIndexContainer} /> 
    </Switch>
    <Route path="/" component={FooterContainer} /> 
  </div>
);
 