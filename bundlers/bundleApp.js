const mkdirp = require("mkdirp");
const bundleApp = require("./createReactApp");

function bundleFolderApp() {
  mkdirp("myApp").then(() => {
    bundleApp();
  });
}

module.exports = bundleFolderApp;
