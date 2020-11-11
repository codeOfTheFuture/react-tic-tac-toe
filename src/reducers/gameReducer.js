import { actionTypes } from "../actions";

const initialState = {
  gameStarted: false,
  playerTurn: "",
  gameOver: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GAME_STARTED:
      return {
        ...state,
        gameStarted: true,
        playerTurn: "player1",
        gameOver: false,
      };
    default:
      return state;
  }
};
