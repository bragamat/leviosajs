#! /usr/bin/env node
const { createReactApp } = require('../bundlers')

const run = async ({ installOnCurrentDirectory = false }) => {
  if (installOnCurrentDirectory) {
    return createReactApp({ installOnCurrentDirectory })
  }

  if (!process.argv[2]) return console.log('Name is needed')

  return createReactApp({ appName: process.argv[2], installOnCurrentDirectory })
}


try {
  const _ = require(process.cwd() + '/package.json');
  run({ installOnCurrentDirectory: true })
} catch (e) {
  run()
}

