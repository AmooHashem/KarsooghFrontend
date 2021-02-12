import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DevTools from '../containers/DevTools';
import CreateAccount from '../containers/CreateAccount'
import Login from '../containers/Login'
import Homepage from '../containers/Homepage';
import Staff from '../containers/Staff/Staff';
import Dashboard from '../containers/Dashboard/Dashboard';

const Root = () => {
  return (
    <>
      <Switch>
        <Route path='/create-account' component={CreateAccount}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path="/loading/"></Route>
        <Route path="/staff/" component={Staff} />
        <Route path="/dashboard/" component={Dashboard} />
        <Route path="/" component={Homepage} />
      </Switch>
      <DevTools />
    </>
  );
};
export default Root;
