import { actionTypes } from "../actions";

const initialState = {
  gameStarted: false,
  currentPlayer: {},
  gameOver: false,
  totalMoves: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_PLAYER:
      return {
        ...state,
        currentPlayer: action.payload,
      };
    case actionTypes.GAME_STARTED:
      return {
        ...state,
        gameStarted: true,
        gameOver: false,
      };
    case actionTypes.UPDATE_TOTAL_MOVES:
      return {
        ...state,
        totalMoves: action.payload,
      };
    case actionTypes.GAME_OVER:
      return {
        ...state,
        gameStarted: false,
        gameOver: true,
      };
    default:
      return state;
  }
};
