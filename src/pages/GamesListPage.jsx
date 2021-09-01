import { Component } from 'react';
import { Link } from 'react-router-dom';
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
    // this.state.gameData = [{}, {}, {}]
    // [<Game />, <Game />, <Game />]

    const gamesJSX = this.state.gameData.map((gameObj, idx) => {
      return (
        <Link to={`/games/${gameObj._id}`}>
          <Game key={idx} gameObj={gameObj} />
        </Link>
      )
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
