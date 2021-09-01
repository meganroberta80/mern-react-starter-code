const url = 'http://localhost:4000/api/games';

// This is where we will still the logic to make our API calls.
class GameModel {
  static all() {
    // fetch uses a "JavaScript promise" - fetch promises that at some point in the future, we will get a response back
    return fetch(url)
      .then((response) => {
        // convert the response into a usable form
        return response.json()
      })
      .then((data) => {
        console.log('All the game data =>')
        console.log(data);
      })
  }
}

export default GameModel;
