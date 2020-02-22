const fs = require("fs");
const chalk = require("chalk");
const mkdirp = require("mkdirp");
const { execSync } = require("child_process");
const readMe = require("../blueprints/readMe.js");
const staticFiles = require("../blueprints/static");
const appTest = require("../blueprints/tests/AppTest");
const webpackConfig = require("../blueprints/webpack");
const jestConfig = require("../blueprints/jestConfig");
const gitIgnore = require("../blueprints/gitIgnore.js");
const babelConfig = require("../blueprints/babelConfig");
const packagejson = require("../blueprints/packageJson.js");

const {
  stateless,
  reactIndex,
  globalStyle,
  styles,
  appStyle,
  app
} = require("../blueprints/ReactComponents");

function createReactApp(appName) {
  console.log(chalk.yellow("wait a minute please"));
  console.log(chalk.yellow("Creating application......."));
  mkdirp(`./${appName}/src/`).then(() => {
    createStaticFiles(appName);
    createWebpackConfig(appName);
    createAppIndex(appName);
    createApp(appName);
    createReadmeGit(appName);
    createTestSetup(appName);
    execSync(`(cd ${appName} && git init && npm i --verbose)`);
    console.log(chalk.yellow("setup done!"));
    console.log(chalk.yellow(`cd ${appName} && npm i && leviosa-start`));
  });
}

function createStaticFiles(appName) {
  const dir = `${appName}/public/`;
  mkdirp(dir).then(() => {
    writeInFile(dir + "index.html", staticFiles());
    writeInFile(`${appName}/package.json`, packagejson(appName));
  });
}

function createWebpackConfig(appName) {
  writeInFile(`${appName}/webpack.config.js`, webpackConfig);
}

function createAppIndex(appName) {
  writeInFile(`${appName}/index.js`, reactIndex());
  writeInFile(`${appName}/globalStyle.js`, globalStyle());
}

function createApp(appName) {
  writeInFile(`${appName}/src/App.js`, stateless(false, app()));
  writeInFile(`${appName}/src/styles.js`, styles(appStyle));

  const dir = `${appName}/src/__tests__/`;
  mkdirp(dir).then(() => {
    writeInFile(dir + "App.test.js", appTest());
  });
}

function createReadmeGit(appName) {
  writeInFile(`${appName}/readme.md`, readMe(appName));
  writeInFile(`${appName}/.gitignore`, gitIgnore());
}

function createTestSetup(appName) {
  writeInFile(`${appName}/jest.config.js`, jestConfig());
  writeInFile(`${appName}/babel.config.js`, babelConfig());
}

const writeInFile = (fileName, content) => {
  return fs.writeFile(fileName, content, err => {
    if (err) throw err;
  });
};

module.exports = createReactApp;
