const reactIndex = () => `import React from 'react'
import { render } from "react-dom";
import App from './src/App'

render(<App />, document.querySelector("[react-root='app']"))

if (module.hot) {
  module.hot.accept("./src/App.js", () => {
    const NextRootContainer = require("./src/App.js").default;
    render(<NextRootContainer />, document.querySelector("[react-root='app']"));
  });
}


`;

module.exports = reactIndex;
