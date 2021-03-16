import { render } from "@testing-library/react";
import App from "./App";

describe("links redirect to correct pages", () => {
  test("renders App", () => {
    render(<App />);
  });
});
