const fs = require('fs')
const chalk = require('chalk')

const writeInFile = (fileName, content) =>
  new Promise((resolve, reject) => {
    console.log(
      chalk.yellow('Writing files, please wait :D', fileName),
    )
    return fs.writeFile(fileName, content, err =>
      err ? reject(err) : resolve({ fileName, content }),
    )
  })

module.exports = writeInFile
