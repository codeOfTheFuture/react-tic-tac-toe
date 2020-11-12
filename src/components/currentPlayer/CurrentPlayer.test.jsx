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
    test("component does not render", () => {
      const wrapper = setup({ game: { gameStarted: false } });
      const component = findByTestAttr(wrapper, "component-current-player");
      expect(component.length).toBe(0);
    });
  });
});
