import { shallow } from "enzyme";

import { findByTestAttr } from "../../../test/testUtils";
import PlayerForm from "./PlayerForm";

const setup = () => {
  return shallow(<PlayerForm />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-player-form");
  expect(component.length).toBe(1);
});
