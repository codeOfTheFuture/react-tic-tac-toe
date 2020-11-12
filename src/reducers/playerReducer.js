import { actionTypes } from "../actions";

const initialState = {
  player1: {
    name: "Player 1",
    symbol: "X",
    wonGame: false,
    moves: {
      topRow: 0,
      middleRow: 0,
      bottomRow: 0,
      leftColumn: 0,
      middleColumn: 0,
      rightColumn: 0,
      leftDiagonal: 0,
      rightDiagonal: 0,
    },
  },
  player2: {
    name: "Player 2",
    symbol: "O",
    wonGame: false,
    moves: {
      topRow: 0,
      middleRow: 0,
      bottomRow: 0,
      leftColumn: 0,
      middleColumn: 0,
      rightColumn: 0,
      leftDiagonal: 0,
      rightDiagonal: 0,
    },
  },
};

export default (state = initialState, action) => {
  const { player1, player2 } = state;
  switch (action.type) {
    case actionTypes.SET_PLAYERS:
      return {
        ...state,
        player1: {
          ...player1,
          name: action.payload.playerName1,
        },
        player2: {
          ...player2,
          name: action.payload.playerName2,
        },
      };
    case actionTypes.UPDATE_PLAYER_1:
      return {
        ...state,
        player1: action.payload,
      };
    case actionTypes.UPDATE_PLAYER_2:
      return {
        ...state,
        player2: action.payload,
      };
    default:
      return state;
  }
};
