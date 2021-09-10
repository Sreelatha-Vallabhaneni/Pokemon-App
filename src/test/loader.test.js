import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Loader from "../components/loader";

Enzyme.configure({ adapter: new Adapter() });

describe("<Loader />", () => {
  it("render loader image", () => {
    const wrapper = shallow(<Loader />);
    const url =
      "https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif";
    expect(wrapper.find("img").prop("src")).toEqual(url);
  });
});
