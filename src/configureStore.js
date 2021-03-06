import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

import rootReducer from "./reducers";

export const middleware = [ReduxThunk];
export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
