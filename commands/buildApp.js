#! /usr/bin/env node

const { execSync } = require("child_process");

function buildApp() {
  execSync(`cd ${process.cwd()} && npm run build`, {
    stdio: [0, 1, 2]
  });
}

buildApp();
