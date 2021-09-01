import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import GamesListPage from '../pages/GamesListPage';

// AGENDA FOR TODAY:
// - Create the index page - see all games
// - Create the show page - see one game
// - CReate the create page - Add a new game

function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/games' component={GamesListPage} />
    </Switch>
  );
}

export default Routes;
