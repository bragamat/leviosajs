const reactIndex = () => `import "react-hot-loader/patch";
import React from 'react'
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from './src/App'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.querySelector("[react-root='app']")
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./src/App.js", () => {
    const NextRootContainer = require("./src/App.js").default;
    render(<NextRootContainer />);
  });
}
`;

module.exports = reactIndex;
