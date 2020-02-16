#! /usr/bin/env node --use-strict
const { execSync } = require("child_process");
const bundleReactApp = require("./bundlers/bundleApp");

const run = async () => {
  if (!process.argv[2]) return console.log("Name is needed");

  const app = await bundleReactApp(process.argv[2]);
  execSync(`cd ${process.cwd()}/${process.argv[2]} && npm i`);
};

run();
