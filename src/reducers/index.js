import { combineReducers } from "redux";
import players from "./playerReducer";
import game from "./gameReducer";

export default combineReducers({
  players,
  game,
});
