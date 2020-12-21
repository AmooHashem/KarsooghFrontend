import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DevTools from '../containers/DevTools';
import EditWorkshop from '../containers/EditWorkshop';
import Homepage from '../containers/Homepage';
import MentorPage from '../containers/MentorPage';
import Survey from '../containers/Survey';
import Workshop from '../containers/Workshop';
import Workshops from '../containers/Workshops';
import PrivateRoute from './PrivateRoute';
import dashboard from '../containers/dashboard';
const Root = () => {
  return (
    <>
      <Switch>
        <Route path="/loading/"></Route>
        <PrivateRoute path="/edit_workshop/:fsmId/" component={EditWorkshop} />
        <Route path="/dashboard/" component={dashboard} />
        <Route path="/workshops/" component={Workshops} />
        <Route path="/workshop/">
          <Switch>
            <PrivateRoute
              path="/workshop/:playerUUID/:fsmId/:stateId/"
              component={Workshop}
            />
            <PrivateRoute path="/workshop/:fsmId/" component={Workshop} />
            <Route path="/workshop/" component={Workshops} />
          </Switch>
        </Route>
        <PrivateRoute path="/mentor/" component={MentorPage} />
        <Route path="/survey" component={Survey} />
        <Route path="/" component={Homepage} />
      </Switch>
      <DevTools />
    </>
  );
};
export default Root;
