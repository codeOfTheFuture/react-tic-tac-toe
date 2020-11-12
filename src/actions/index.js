export const actionTypes = {
  SET_PLAYERS: "SET_PLAYERS",
  GAME_STARTED: "GAME_STARTED",
  SET_CURRENT_PLAYER: "SET_CURRENT_PLAYER",
};

export const setPlayers = (player1, player2) => ({
  type: actionTypes.SET_PLAYERS,
  payload: { player1, player2 },
});

export const startGame = () => ({
  type: actionTypes.GAME_STARTED,
});

export const setCurrentPlayer = (player) => ({
  type: actionTypes.SET_CURRENT_PLAYER,
  payload: player,
});
