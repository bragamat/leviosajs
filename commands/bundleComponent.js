#! /usr/bin/env node
const { createComponent } = require("../bundlers");

const bundleComponent = () => {
  if (!process.argv[2])
    return console.log("Need to provide a name for component");

  return createComponent(process.argv[2]);
};

bundleComponent();
