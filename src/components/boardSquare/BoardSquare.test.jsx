import { shallow } from "enzyme";

import { findByTestAttr } from "../../../test/testUtils";

import BoardSquare from "./BoardSquare";

const setup = () => {
  return shallow(<BoardSquare />);
};

test("renders board square without error", () => {
  const wrapper = setup();
  const components = findByTestAttr(wrapper, "component-board-square");
  expect(components.length).toBe(1);
});
