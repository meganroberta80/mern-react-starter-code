import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import GamesListPage from '../pages/GamesListPage';
import GamesShowPage from '../pages/GamesShowPage';

// AGENDA FOR TODAY:
// - Create the index page - see all games
// - Create the show page - see one game
// - CReate the create page - Add a new game

function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/games' component={GamesListPage} />
      {/* Below we are taking the props from the Route component */}
      {/* and passing to the GamesShowPage component */}
      {/* This will allow us to acces the :id from the URL */}
      <Route path='/games/:id' render={(props) => <GamesShowPage {...props} />} />
    </Switch>
  );
}

export default Routes;
