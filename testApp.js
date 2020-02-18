#! /usr/bin/env node --use-strict

const { execSync } = require("child_process");

function testApp() {
  execSync(`cd ${process.cwd()} && npm test`, {
    stdio: [0, 1, 2]
  });
}

testApp();
