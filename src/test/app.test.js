import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import axios from "axios";

test("fetch data with axios", async () => {
  jest.spyOn(axios, "get");
  render(<App />);
  expect(axios.get).toHaveBeenCalledWith(
    "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
  );
});
