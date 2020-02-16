const mkdirp = require("mkdirp");
const { execSync } = require("child_process");
const bundleApp = require("./createReactApp");

function bundleFolderApp(appName) {
  mkdirp(appName).then(() => {
    bundleApp(appName);
    execSync(`cd ${process.cwd()}/${process.argv[2]}; npm i`);
  });
}

module.exports = bundleFolderApp;
