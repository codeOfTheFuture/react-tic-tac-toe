import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { findByTestAttr, storeFactory } from "../../../test/testUtils";

import GameOver from "./GameOver";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <GameOver />
    </Provider>
  );
  return wrapper;
};

describe("render", () => {
  describe("game is over", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = {
        game: {
          gameStarted: false,
          gameOver: true,
          currentPlayer: {
            name: "",
            wonGame: false,
          },
        },
      };
      wrapper = setup(initialState);
    });
    test("component renders without error", () => {
      const component = findByTestAttr(wrapper, "component-game-over");
      expect(component.length).toBe(1);
    });
  });
});
