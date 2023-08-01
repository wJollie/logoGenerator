const { Triangle, Circle, Square } = require("./shapes");
const getUserInputs = require("./userInputs");
const fs = require("fs");
const path = require("path");

async function logoGenerator() {
  console.log("Starting logo generation...");

  try {
    const { text, textColor, shape, shapeColor } = await getUserInputs();

    console.log("Received user inputs:", {
      text,
      textColor,
      shape,
      shapeColor,
    });

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

    // Create the SVG code with the shape and text
    const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
      ${shapeInstance.render()}
      <text x="50%" y="50%" font-family="Arial" font-size="40" fill="${textColor}" text-anchor="middle">${text}</text>
    </svg>`;

    const filePath = path.join(__dirname, "examples", "logo.svg");
    fs.writeFileSync(filePath, svgCode);
    console.log("Generated logo.svg");
  } catch (error) {
    console.error("Error generating logo:", error.message);
  }
}

logoGenerator();
