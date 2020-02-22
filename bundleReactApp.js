#! /usr/bin/env node
const bundleReactApp = require("./bundlers/bundleApp");

const run = async () => {
  if (!process.argv[2]) return console.log("Name is needed");

  const app = await bundleReactApp(process.argv[2]);
};

run();
