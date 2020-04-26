const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");
const { stateless, styles } = require("../blueprints/ReactComponents");

const writeComponent = (fileName, content) => {
  const dir = path.resolve("src", "components", fileName);

  mkdirp.sync(dir);
  return fs.writeFile(path.resolve(dir, "index.js"), content, err => {
    if (err) throw err;
  });
};

const writeStyle = (fileName, content) => {
  const dir = path.resolve("src", "components", fileName);
  return fs.writeFile(path.resolve(dir, "styles.js"), content, err => {
    if (err) throw err;
    return console.log("\nDone");
  });
};

function createComponent(fileName) {
  if (!fileName) throw Error.new("Should Provide a Component Name");

  const componentName = fileName[0].toUpperCase() + fileName.slice(1);
  const ReactComponent = stateless(componentName);
  const StyleComponent = styles();

  writeComponent(`${componentName}`, ReactComponent);
  return writeStyle(`${componentName}`, StyleComponent);
}

module.exports = createComponent;
