import { actionTypes } from "../actions";

const initialState = {
  gameStarted: false,
  currentPlayer: {},
  gameOver: false,
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
    default:
      return state;
  }
};
