const { exec, execSync } = require("child_process");

function startApp() {
  execSync(`npm start`);
}

startApp();
