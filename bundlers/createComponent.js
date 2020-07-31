// const path = require("path");
const fs = require('fs')
const mkdirp = require('mkdirp')
const { stateless, styles } = require('../blueprints/ReactComponents')

const writeComponent = (fileName, content) => {
  const dir = `src/components/${fileName}`

  mkdirp.sync(dir)
  return fs.writeFile(`${dir}/index.js`, content, err => {
    if (err) throw err
  })
}

const writeStyle = (fileName, content) => {
  const dir = `src/components/${fileName}`

  return fs.writeFile(`${dir}/styles.js`, content, err => {
    if (err) throw err
    return console.log('\nDone')
  })
}

function createComponent(fileName) {
  if (!fileName) throw Error.new('Should Provide a Component Name')

  const componentName = fileName[0].toUpperCase() + fileName.slice(1)
  const ReactComponent = stateless(componentName)
  const StyleComponent = styles()

  writeComponent(`${componentName}`, ReactComponent)
  return writeStyle(`${componentName}`, StyleComponent)
}

module.exports = createComponent
