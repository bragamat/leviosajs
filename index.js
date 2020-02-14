// const path = require("path");
const fs = require("fs");
const mkdirp = require("mkdirp");

function createFile(fileName) {
  if (!fileName) throw "Should Provide a Component Name";

  const componentName = fileName[0].toUpperCase() + fileName.slice(1);
  const ReactComponent = componentBluePrint(componentName);
  // const StyleFile = styleBluePrint();

  writeComponent(`${componentName}`, ReactComponent);
  // writeComponent("styles.js", StyleFile);
}

const componentBluePrint = componentName => {
  return `import React from 'react'
// import styles from './styles'
const ${componentName} = () => <div>Change me! :D</div>
export default ${componentName}`;
};

// const styleBluePrint = () => `import styled from 'style-components'`;

const writeComponent = (fileName, content) => {
  const dir = `src/components/${fileName}`;

  mkdirp.sync(dir);
  return fs.writeFile(dir + `/${fileName}.js`, content, err => {
    if (err) throw err;
    console.log(`${fileName} is created successfully.`);
  });
};

module.exports = createFile;
