const chalk = require("chalk");
const figlet = require("figlet");

function runConsoleMessages() {
  console.clear();
  console.log(
    chalk.yellow(figlet.textSync("LEVIOSA!", { horizontalLayout: "full" }))
  );

  console.log(chalk.yellow("It's Leviosa, not Leviosaaa"));
  console.log(chalk.yellow("\nLeviosaJS successufully installed!"));
  console.log(chalk.yellow("cd myApp && npm start"));
}

runConsoleMessages();

module.exports = runConsoleMessages;
