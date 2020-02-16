const globalStyle = () => `import { createGlobalStyle } from 'styled-components'

const Container = createGlobalStyle\`

  html {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    font-kerning: auto;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    min-height: 100%;
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }

  body {
    background-color: #e6e6e6;
    color: #4c4c4c;
    font-family: '"Open Sans", sans-serif';
    font-size: 10px;

    &.vg-no-scroll {
      overflow-y: hidden;
    }
  }

\`

export default GlobalStyle
`;

module.exports = globalStyle;
