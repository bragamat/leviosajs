const { exec } = require('child_process')
const chalk = require('chalk')

function runCommand(command, commandType) {
  return new Promise((resolve, reject) => {
    if (commandType === 'git') {
      console.log(chalk.yellow('Starting git repo'))
    } else {
      console.log(chalk.yellow('Adding packages'))
      console.log(chalk.blue(`${command}`))
    }
    return exec(command, (error, stdout, stderr) => {
      console.log(`stdout: ${stdout}`)
      if (error) {
        console.error(`stderr: ${stderr}`)
        return reject(error)
      }
      return resolve(command)
    })
  })
}
module.exports = runCommand
