const createComponent = require("../bundlers/createComponent");
let inquirer = require("inquirer");

const questions = [
  {
    name: "name",
    type: "input",
    message: "Provide the component you want to create:",
    validate: function(value) {
      if (value.length) {
        return "Making Magic....\n" && createComponent(value);
      } else {
        return "Please, provide a name for your component";
      }
    }
  }
];

module.exports = inquirer.prompt(questions);
