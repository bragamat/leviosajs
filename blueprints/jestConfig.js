const jestConfig = () => `module.exports = {
  verbose: true,
  globals: {
    __DEV__: true
  }
};
`;

module.exports = jestConfig;
