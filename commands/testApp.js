#! /usr/bin/env node

const { execSync } = require("child_process");

function testApp() {
  execSync(`cd ${process.cwd()} && npm test`);
}

testApp();
