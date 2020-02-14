const chalk = require("chalk");
const figlet = require("figlet");

console.clear();

console.log(
  chalk.yellow(figlet.textSync("LEVIOSA!", { horizontalLayout: "full" }))
);
