import React from 'react';

// fetch the data for a particular game by its id

class GamesShowPage extends React.Component {
  state = {
    title: '',
    publisher: ''
  }

  componentDidMount() {
    const gameId = this.props.match.params.id;

    console.log(gameId)
  }

  render() {
    console.log('props in the game show page')
    console.log(this.props);

    return (
      <h1>Games Show Page</h1>
    )
  }
}

export default GamesShowPage;