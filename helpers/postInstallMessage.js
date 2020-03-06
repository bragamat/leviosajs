const chalk = require("chalk");
const figlet = require("figlet");

function runConsoleMessages() {
  console.clear();
  console.log(
    chalk.yellow(figlet.textSync("LEVIOSA!", { horizontalLayout: "full" }))
  );

  console.log(chalk.yellow("\nLeviosaJS successufully installed!"));
}

runConsoleMessages();

module.exports = runConsoleMessages;
