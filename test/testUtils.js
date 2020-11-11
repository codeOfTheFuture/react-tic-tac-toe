import { createStore } from "redux";

import rootReducer from "../src/reducers";

/**
 * @function storeFactory
 * @param {object} initialState - Initial state for store
 * @returns {Store} - Redux store
 */

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
};

/**
 * Returns node(s) with the given data-test attributes.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} value - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test='${value}']`);
};
