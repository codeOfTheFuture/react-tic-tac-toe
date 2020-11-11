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

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-player-form");
  expect(component.length).toBe(1);
});
