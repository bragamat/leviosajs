const chalk = require('chalk')
const mkdirp = require('mkdirp')
const { execSync } = require('child_process')
const readMe = require('../blueprints/readMe')
const staticFiles = require('../blueprints/static')
const appTest = require('../blueprints/tests/AppTest')
const jestConfig = require('../blueprints/jestConfig')
const gitIgnore = require('../blueprints/gitIgnore')
const babelConfig = require('../blueprints/babelConfig')
const productionRunner = require('../blueprints/servers/production')
const {
  devDependencies,
  dependencies,
  script,
} = require('../blueprints/packageJson')

const {
  stateless,
  reactIndex,
  globalStyle,
  styles,
  appStyle,
  app,
} = require('../blueprints/ReactComponents')

const { common, dev, prod } = require('../blueprints/webpack')

const { runCommand, writeInFile } = require('../services')

function createProductionServer(appName) {
  const dir = `${appName}/server`
  mkdirp(dir).then(() =>
    writeInFile(`${dir}/server.js`, productionRunner),
  )
}

function createStaticFiles(appName) {
  const dir = `${appName}/public/`
  mkdirp(dir)
    .then(() => writeInFile(`${dir}index.html`, staticFiles()))
    .then(() => writeInFile(`${appName}/package.json`, script))
}

function createWebpackConfig(appName) {
  writeInFile(`${appName}/webpack.common.js`, common())
    .then(() => writeInFile(`${appName}/webpack.dev.js`, dev()))
    .then(() => writeInFile(`${appName}/webpack.prod.js`, prod()))
}

function createAppIndex(appName) {
  writeInFile(`${appName}/index.js`, reactIndex()).then(() =>
    writeInFile(`${appName}/globalStyle.js`, globalStyle()),
  )
}

function createApp(appName) {
  const dir = `${appName}/src/__tests__/`
  writeInFile(`${appName}/src/App.js`, stateless(false, app()))
    .then(() =>
      writeInFile(`${appName}/src/styles.js`, styles(appStyle)),
    )
    .then(() => mkdirp(dir))
    .then(() => writeInFile(`${dir}App.test.js`, appTest()))
}

function createReadmeGit(appName) {
  writeInFile(`${appName}/readme.md`, readMe(appName)).then(() =>
    writeInFile(`${appName}/.gitignore`, gitIgnore()),
  )
}

function createTestSetup(appName) {
  writeInFile(`${appName}/jest.config.js`, jestConfig()).then(() =>
    writeInFile(`${appName}/babel.config.js`, babelConfig()),
  )
}

function createReactApp(appName) {
  const appPath = `${process.cwd()}/${appName}`
  console.log(chalk.yellow('wait a minute please'))
  console.log(chalk.yellow('Creating application.......'))
  const dep = dependencies.join(' ')
  const devDep = devDependencies.join(' ')
  mkdirp(`./${appName}/src/`)
    .then(() => createStaticFiles(appName))
    .then(() => createWebpackConfig(appName))
    .then(() => createAppIndex(appName))
    .then(() => createApp(appName))
    .then(() => createReadmeGit(appName))
    .then(() => createTestSetup(appName))
    .then(() => createProductionServer(appName))
    .then(() => runCommand(`git init ${appPath}`, 'git'))
    .then(() =>
      runCommand(
        `npm i --save-dev ${devDep} --prefix ${appPath} --force`,
      ),
    )
    .then(() =>
      runCommand(`npm i --save ${dep} --prefix ${appPath} --force`),
    )
    .then(() => console.log(chalk.yellow('Setup Done :D')))
    .then(() =>
      execSync(`cd ${appPath} && leviosa-start`, {
        stdio: [0, 1, 2],
      }),
    )

    .catch(err => console.log('Something went wrong :/', err))
  return appPath
}

module.exports = createReactApp
