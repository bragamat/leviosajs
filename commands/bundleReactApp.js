#! /usr/bin/env node
const { createReactApp } = require('../bundlers')

const run = async () => {
  if (!process.argv[2]) return console.log('Name is needed')

  return createReactApp(process.argv[2])
}

run()
