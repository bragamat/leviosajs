// const path = require("path");
const fs = require("fs");
const mkdirp = require("mkdirp");
const staticFiles = require("../blueprints/static");
const webpackConfig = require("../blueprints/webpack");
const { stateless, reactIndex } = require("../blueprints/ReactComponents");
const packagejson = require("../blueprints/packageJson.js");
const { execSync } = require("child_process");

function createReactApp() {
  mkdirp("./myApp/src/").then(() => {
    createStaticFiles();
    createWebpackConfig();
    createAppIndex();
    createApp();
    execSync("cd myApp && npm i");
  });
}

function createStaticFiles() {
  const dir = "myApp/public/";
  mkdirp(dir).then(() => {
    writeInFile(dir + "index.html", staticFiles());
    writeInFile("myApp/package.json", packagejson("myApp"));
  });
}

function createWebpackConfig() {
  writeInFile("myApp/webpack.config.js", webpackConfig);
}

function createAppIndex() {
  writeInFile("myApp/index.js", reactIndex());
}

function createApp() {
  writeInFile("myApp/src/App.js", stateless("App"));
}

const writeInFile = (fileName, content) => {
  return fs.writeFile(fileName, content, err => {
    if (err) throw err;

    return console.log("\nDone");
  });
};

module.exports = createReactApp;
