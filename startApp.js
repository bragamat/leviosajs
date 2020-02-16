#! /usr/bin/env node --use-strict

const { execSync } = require("child_process");

function startApp() {
  console.log();
  // console.log(execSync(`cd ${process.cwd()}`));
  execSync(`cd ${process.cwd()} && npm start`);
}

startApp();
