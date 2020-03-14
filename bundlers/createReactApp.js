const fs = require("fs");
const chalk = require("chalk");
const mkdirp = require("mkdirp");
const { exec, execSync } = require("child_process");
const readMe = require("../blueprints/readMe.js");
const staticFiles = require("../blueprints/static");
const appTest = require("../blueprints/tests/AppTest");
const jestConfig = require("../blueprints/jestConfig");
const gitIgnore = require("../blueprints/gitIgnore.js");
const babelConfig = require("../blueprints/babelConfig");
const {
  devDependencies,
  dependencies,
  script
} = require("../blueprints/packageJson.js");

const {
  stateless,
  reactIndex,
  globalStyle,
  styles,
  appStyle,
  app
} = require("../blueprints/ReactComponents");

const { common, dev, prod } = require("../blueprints/webpack");

const writeInFile = (fileName, content) => {
  return fs.writeFile(fileName, content, err => {
    if (err) throw err;
  });
};

function createStaticFiles(appName) {
  const dir = `${appName}/public/`;
  mkdirp(dir).then(() => {
    writeInFile(`${dir}index.html`, staticFiles());
    writeInFile(`${appName}/package.json`, script);
  });
}

function createWebpackConfig(appName) {
  writeInFile(`${appName}/webpack.common.js`, common());
  writeInFile(`${appName}/webpack.dev.js`, dev());
  writeInFile(`${appName}/webpack.prod.js`, prod());
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
    writeInFile(`${dir}App.test.js`, appTest());
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

function createReactApp(appName) {
  const appPath = `${process.cwd()}/${appName}`;
  console.log(chalk.yellow("wait a minute please"));
  console.log(chalk.yellow("Creating application......."));
  mkdirp(`./${appName}/src/`).then(() => {
    const dep = dependencies.join(" ");
    const devDep = devDependencies.join(" ");
    createStaticFiles(appName);
    createWebpackConfig(appName);
    createAppIndex(appName);
    createApp(appName);
    createReadmeGit(appName);
    createTestSetup(appName);
    exec(`git init ${appPath}`);
    exec(`npm i --save-dev ${devDep} --prefix ${appPath}`).on("exit", () => {
      exec(`npm i --save ${dep} --prefix ${appPath}`).on("exit", () => {
        console.log(chalk.yellow("Setup Done :D"));
        return execSync(`cd ${appPath} && leviosa-start`, {
          stdio: [0, 1, 2]
        });
      });
    });
  });
}

module.exports = createReactApp;
