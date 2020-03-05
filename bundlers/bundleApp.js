const mkdirp = require("mkdirp");
const { execSync } = require("child_process");
const bundleApp = require("./createReactApp");

function bundleFolderApp(appName) {
  mkdirp(appName).then(() => {
    bundleApp(appName);
    return execSync(`cd ${process.argv[2]}; npm i`);
  });
}

bundleFolderApp("app");

module.exports = bundleFolderApp;
