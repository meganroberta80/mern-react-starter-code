import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import GamesListPage from '../pages/GamesListPage';

function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/games' component={GamesListPage} />
    </Switch>
  );
}

export default Routes;
