import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { findByTestAttr, storeFactory } from "../../../test/testUtils";

import { findByTestAttr } from "../../../test/testUtils";

import BoardSquare from "./BoardSquare";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <BoardSquare />
    </Provider>
  );
  return wrapper;
};

test("renders board square without error", () => {
  const wrapper = setup();
  const components = findByTestAttr(wrapper, "component-board-square");
  expect(components.length).toBe(1);
});
