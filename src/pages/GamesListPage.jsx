import { Component } from 'react';
import GameModel from '../models/GameModel';
import Game from '../components/Game';

// Steps to show a list of games
// - Create a component for each Game
// - fetch the data for all the Games
// - Add state to my component

// Exercise
// - Get our game data to show up on the page
// - Show the title, and cover art for each game

class GameList extends Component {
  state = {
    gameData: []
  }

  componentDidMount() {
    // Go fetch all the game data
    GameModel.all().then((data) => {
      this.setState({ gameData: data });
    });
  }

  renderGames() {
    // loop through array of games in state
    // and create an array of Game components
    // using the map method
    const gamesJSX = this.state.gameData.map((gameObj, idx) => {
      return <Game key={idx} gameObj={gameObj} />
    });

    return gamesJSX;
  }

  render() {
    return (
      <main>
        <h1>All Games</h1>
        { this.renderGames() }
      </main>
    );
  }
}

export default GameList;
