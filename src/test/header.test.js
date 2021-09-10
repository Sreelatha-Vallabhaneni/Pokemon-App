import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import Header from "../components/header";
import Logo from "../images/pokemon-logo.gif";

Enzyme.configure({ adapter: new Adapter() });

describe("<Header />", () => {
  it("render logo", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("img").prop("src")).toEqual(Logo);
  });
});
