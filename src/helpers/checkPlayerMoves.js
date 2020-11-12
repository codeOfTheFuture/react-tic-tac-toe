const checkPlayerMoves = (player) => {
  for (let move in player.moves) {
    if (player.moves[move] === 3) {
      player.wonGame = true;
    }
  }
  return player;
};
export default checkPlayerMoves;
