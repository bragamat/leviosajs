// const path = require("path");
const fs = require("fs");
const mkdirp = require("mkdirp");
const staticFiles = require("../blueprints/static");
const webpackConfig = require("../blueprints/webpack");
const { stateless, reactIndex } = require("../blueprints/ReactComponents");

function createReactApp() {
  mkdirp("./src/").then(() => {
    createStaticFiles();
    createWebpackConfig();
    createAppIndex();
    createApp();
  });
}

function createStaticFiles() {
  const dir = "public/";
  mkdirp(dir).then(() => {
    writeInFile(dir + "index.html", staticFiles());
  });
}

function createWebpackConfig() {
  writeInFile("webpack.config.js", webpackConfig);
}

function createAppIndex() {
  writeInFile("index.js", reactIndex());
}

function createApp() {
  writeInFile("./src/App.js", stateless("App"));
}

const writeInFile = (fileName, content) => {
  return fs.writeFile(fileName, content, err => {
    if (err) throw err;

    return console.log("\nDone");
  });
};

createReactApp();

module.exports = createReactApp;
