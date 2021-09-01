function Game(props) {
  console.log(props);

  return (
    <div>
      <h3>{props.gameObj.title}</h3>
      <img 
        className="game-img" 
        src={props.gameObj.coverArtUrl} 
        alt="the art for a game" 
      />
    </div>
  )
}

export default Game;