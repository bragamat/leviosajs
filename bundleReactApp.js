#! /usr/bin/env node
const { execSync } = require("child_process");
const bundleReactApp = require("./bundlers/bundleApp");

const run = async () => {
  if (!process.argv[2]) return console.log("Name is needed");

  const app = await bundleReactApp(process.argv[2]);

  execSync(`cd ${process.argv[2]}; npm i --verbose`, {
    stdio: [0, 1, 2]
  });
};

run();
