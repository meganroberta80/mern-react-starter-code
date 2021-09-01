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
      .catch((err) => {
        // handle the error
        console.log(err);
        // Show the user message that says "Something went wrong getting your data. Please try again."
      })
  }

  // Makes a fetch call to get a single game by its id

  // Exercise
  // - Have this method make a call to fetch data for a single game
  // - when calling it pass in the id
  static show(gameId) {

  }
}

export default GameModel;
