const mkdirp = require("mkdirp");
const { execSync } = require("child_process");
const bundleApp = require("./createReactApp");

function bundleFolderApp(appName) {
  mkdirp(appName)
    .then(() => {
      bundleApp(appName);
    })
    .then(() => {
      execSync(`cd ${process.argv[2]}; npm i --verbose`, {
        stdio: [0, 1, 2]
      });
    });
}

module.exports = bundleFolderApp;
