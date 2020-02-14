const chalk = require("chalk");
const figlet = require("figlet");
const bundleComponent = require("./helpers");

// console.log(
//   chalk.yellow(figlet.textSync("You're a wizard", { horizontalLayout: "full" }))
// );

// console.log(
//   chalk.yellow(figlet.textSync("HARRY", { horizontalLayout: "full" }))
// );

const run = async () => {
  const credentials = (await bundleComponent).credentials;
};

run();
