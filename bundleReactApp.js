#! /usr/bin/env node
const bundleReactApp = require("./bundlers/bundleApp");

const run = async () => {
  const app = await bundleReactApp();
};

run();
