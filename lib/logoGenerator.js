const fs = require("fs");
const { Triangle, Circle, Square } = require("./shapes");

function getUserInputs() {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Enter up to three characters: ", (text) => {
      readline.question(
        "Enter the text color (keyword or hexadecimal): ",
        (textColor) => {
          readline.question(
            "Choose a shape (circle, triangle, square): ",
            (shape) => {
              readline.question(
                "Enter the shape color (keyword or hexadecimal): ",
                (shapeColor) => {
                  readline.close();
                  resolve({ text, textColor, shape, shapeColor });
                }
              );
            }
          );
        }
      );
    });
  });
}

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
    const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
      ${shapeInstance.render()}
    </svg>`;

    fs.writeFileSync("logo.svg", svgCode);
    console.log("Generated logo.svg");
  } catch (error) {
    console.error("Error generating logo:", error.message);
  }
}

logoGenerator();
