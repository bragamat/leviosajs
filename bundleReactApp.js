#! /usr/bin/env node --use-strict
const { exec } = require("child_process");
const bundleReactApp = require("./bundlers/bundleApp");

const run = async () => {
  if (!process.argv[2]) return console.log("Name is needed");

  const app = await bundleReactApp(process.argv[2]);
  const app1 = await exec(`cd ${process.cwd()} && npm i`);
};

run();
