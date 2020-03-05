const mkdirp = require("mkdirp");
const bundleApp = require("./createReactApp");

function bundleFolderApp(appName) {
  mkdirp(appName).then(() => {
    return bundleApp(appName);
  });
}

module.exports = bundleFolderApp;
