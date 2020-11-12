import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { findByTestAttr, storeFactory } from "../../../test/testUtils";

import CurrentPlayer from "./CurrentPlayer";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <CurrentPlayer />
    </Provider>
  );
  return wrapper;
};

describe("render", () => {
  describe("game has not been started", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = {
        gameStarted: true,
        playerTurn: "player1",
        gameOver: false,
      };
      wrapper = setup(initialState);
    });
    test("component does not render", () => {
      const component = findByTestAttr(wrapper, "component-current-player");
      expect(component.length).toBe(0);
    });
  });
});
