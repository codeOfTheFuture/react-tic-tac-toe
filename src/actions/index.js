export const actionTypes = {
  SET_PLAYERS: "SET_PLAYERS",
  GAME_STARTED: "GAME_STARTED",
};

export const setPlayers = (player1, player2) => ({
  type: actionTypes.SET_PLAYERS,
  payload: { player1, player2 },
});

export const gameStarted = () => ({
  type: actionTypes.GAME_STARTED,
});
