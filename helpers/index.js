const inquirer = require("inquirer");
const createComponent = require("../bundlers/createComponent");

const questions = [
  {
    name: "name",
    type: "input",
    message: "Provide the component name you want to create:",
    validate(value) {
      if (value.length) {
        return true;
      }
      return "Please, provide a name for your component";
    }
  }
];

module.exports = inquirer.prompt(questions).then(({ name }) => {
  console.log("\n>>Making Magic...");
  createComponent(name);
});
