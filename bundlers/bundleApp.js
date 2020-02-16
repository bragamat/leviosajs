const mkdirp = require("mkdirp");
const bundleApp = require("./createReactApp");

function bundleFolderApp(appName) {
  mkdirp(appName).then(() => {
    bundleApp(appName);
  });
}

module.exports = bundleFolderApp;
