// const path = require("path");
const fs = require("fs");
const mkdirp = require("mkdirp");
const { stateless } = require("../blueprints/ReactComponents");

function createComponent(fileName) {
  if (!fileName) throw "Should Provide a Component Name";

  const componentName = fileName[0].toUpperCase() + fileName.slice(1);
  const ReactComponent = stateless(componentName);

  return writeComponent(`${componentName}`, ReactComponent);
}

const writeComponent = (fileName, content) => {
  const dir = `myApp/src/components/${fileName}`;

  mkdirp.sync(dir);
  return fs.writeFile(dir + `/${fileName}.js`, content, err => {
    if (err) throw err;
    return console.log("\nDone");
  });
};

module.exports = createComponent;
