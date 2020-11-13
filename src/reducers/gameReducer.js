import { actionTypes } from "../actions";

const initialState = {
  gameBoard: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  gameStarted: false,
  currentPlayer: {},
  gameOver: false,
  totalMoves: 0,
};

const game = (state = initialState, action) => {
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
        resetBoard: false,
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

export default game;
