#! /usr/bin/env node

const { execSync } = require('child_process')

function execCommand(script) {
  execSync(script, {
    stdio: [0, 1, 2],
  })
}

function startApp() {
  if (process.argv[2] === '--production') {
    return execCommand(
      `cd ${process.cwd()} && npm run build && npm start`,
    )
  }

  return execCommand(`cd ${process.cwd()} && npm run dev`)
}

startApp()
