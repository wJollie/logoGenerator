const { Triangle, Circle, Square } = require("./shapes");
const getUserInputs = require("./userInputs");
const fs = require("fs");

async function generateLogo() {
  const { text, textColor, shape, shapeColor } = await getUserInputs();

  let shapeInstance;
  switch (shape) {
    case "circle":
      shapeInstance = new Circle();
      break;
    case "triangle":
      shapeInstance = new Triangle();
      break;
    case "square":
      shapeInstance = new Square();
      break;
    default:
      throw new Error("Invalid shape chosen.");
  }

  shapeInstance.setColor(shapeColor);
  const svgCode = `<svg width="300" height="200">${shapeInstance.render()}</svg>`;

  fs.writeFileSync("logo.svg", svgCode);
  console.log("Generated logo.svg");
}

module.exports = generateLogo;
