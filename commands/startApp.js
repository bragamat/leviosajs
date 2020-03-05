#! /usr/bin/env node

const { execSync } = require("child_process");

function startApp() {
  execSync(`cd ${process.cwd()} && npm start`, {
    stdio: [0, 1, 2]
  });
}

startApp();
