import React from 'react';
import GameModel from '../models/GameModel';

// fetch the data for a particular game by its id

class GamesShowPage extends React.Component {
  state = {
    title: '',
    publisher: '',
    coverArtUrl: '',
    completed: false
  }

  componentDidMount() {
    // pulling the game id from the URL
    const gameId = this.props.match.params.id;

    // Making a call to our API
    // to get the data for a single game
    GameModel.show(gameId).then((data) => {
      this.setState({
        title: data.title,
        publisher: data.publisher,
        coverArtUrl: data.coverArtUrl,
        completed: data.completed
      })
    })
  }

  render() {
    console.log('props in the game show page')
    console.log(this.props);

    return (
      <main>
        <h1>Games Show Page</h1>
        <h3>{this.state.title}</h3>
        <p>{this.state.publisher}</p>
        <p>Completed: {this.state.completed ? 'True' : 'False'}</p>
        <img className="game-img" src={this.state.coverArtUrl} alt="" />
      </main>
    )
  }
}

export default GamesShowPage;