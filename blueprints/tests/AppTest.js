const testContent = () => `import React from "react";
import { render } from "@testing-library/react";

import App from "../App";

describe("<App />", () => {
  it("should render without errors", () => {
    render(<App />);
  });
});`;

module.exports = testContent;
