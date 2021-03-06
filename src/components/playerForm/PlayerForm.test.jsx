import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { findByTestAttr, storeFactory } from "../../../test/testUtils";
import PlayerForm from "./PlayerForm";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <PlayerForm />
    </Provider>
  );
  return wrapper;
};

describe("render", () => {
  describe("game has not been started", () => {
    test("renders component without error", () => {
      const wrapper = setup();
      const component = findByTestAttr(wrapper, "component-player-form");
      expect(component.length).toBe(1);
    });

    test("renders inputs", () => {
      const wrapper = setup();
      const inputs = findByTestAttr(wrapper, "input");
      expect(inputs.length).toBe(2);
    });

    test("renders start game button", () => {
      const wrapper = setup();
      const startGameBtn = findByTestAttr(wrapper, "start-game");
      expect(startGameBtn.length).toBe(1);
    });
  });
  describe("game has started", () => {
    test("component does not render", () => {
      const wrapper = setup({ game: { gameStarted: true } });
      const component = findByTestAttr(wrapper, "component-player-form");
      expect(component.length).toBe(0);
    });
  });
});
