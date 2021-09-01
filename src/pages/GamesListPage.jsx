import { Component } from 'react';
import GameModel from '../models/GameModel';

// Steps to show a list of games
// - Create a component for each Game
// - fetch the data for all the Games
// - Add state to my component


class GameList extends Component {
  state = {
    gameData: []
  }

  componentDidMount() {
    // Go fetch all the game data
    GameModel.all();
  }

  render() {
    return (
      <main>
        <h1>All Games</h1>
      </main>
    );
  }
}

export default GameList;
