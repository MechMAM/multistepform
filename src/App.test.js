import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

configure({ adapter: new Adapter() });

describe("App", () => {
  it("should render", () => {
    const wrapper = shallow(<App />);
  });
});
