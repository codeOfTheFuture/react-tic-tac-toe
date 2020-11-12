import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { findByTestAttr, storeFactory } from "../../../test/testUtils";

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

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      game: {
        gameStarted: true,
        gameOver: false,
      },
    };
    wrapper = setup(initialState);
  });
  test("renders board square without error", () => {
    const components = findByTestAttr(wrapper, "component-board-square");
    expect(components.length).toBe(1);
  });
});
