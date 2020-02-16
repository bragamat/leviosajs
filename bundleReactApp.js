#! /usr/bin/env node --use-strict "$@"
const bundleReactApp = require("./bundlers/bundleApp");

const run = async () => {
  if (!process.argv[2]) return console.log("Pass a name for the app");
  const app = await bundleReactApp(process.argv[2]);
};

run();
