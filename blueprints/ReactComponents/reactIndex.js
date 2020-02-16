const reactIndex = () => `import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/App'
import GlobalStyle from './globalStyle

ReactDOM.render(<><GlobalStyle /><App /></>, document.querySelector("[react-root='app']"))`;

module.exports = reactIndex;
