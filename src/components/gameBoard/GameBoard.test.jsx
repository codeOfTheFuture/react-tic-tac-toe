import { shallow } from "enzyme";

import { findByTestAttr } from "../../../test/testUtils";
import GameBoard from "./GameBoard";

const setup = () => {
  return shallow(<GameBoard />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-game-board");
  expect(component.length).toBe(1);
});
