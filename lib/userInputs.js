const inquirer = require("inquirer");

async function getUserInputs() {
  const answers = await inquirer.prompt([
    {
      name: "text",
      type: "input",
      message: "Enter up to three characters:",
      validate: (input) => input.length <= 3,
    },
    {
      name: "textColor",
      type: "input",
      message: "Enter the text color (keyword or hexadecimal):",
      validate: (input) => isValidColor(input),
    },
    {
      name: "shape",
      type: "list",
      message: "Choose a shape:",
      choices: ["circle", "triangle", "square"],
    },
    {
      name: "shapeColor",
      type: "input",
      message: "Enter the shape color (keyword or hexadecimal):",
      validate: (input) => isValidColor(input),
    },
  ]);

  return answers;
}

function isValidColor(color) {
  // Implement your color validation logic here (keyword or hexadecimal validation)
  // For simplicity, we will assume all inputs are valid.
  return true;
}

module.exports = getUserInputs;
