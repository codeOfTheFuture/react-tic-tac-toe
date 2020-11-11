import { actionTypes } from "../actions";
export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_PLAYERS:
      return action.payload;
    default:
      return state;
  }
};
