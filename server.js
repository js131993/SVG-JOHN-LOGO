
var inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Shape, Triangle, Square } = require("./lib/shapes.js");
const { validateHTMLColorName, validateHTMLColorHex } = require ("validate-color");

var validateColor = require("validate-color").default;

const questions = [
  {
    name: "Q1",
    message: "Text to diplay inside of shape.",
    validate: (answer) => answer.length < 4,
  },
  {
    name: "Q2",
    message:
      "What would you like for the color of the text? (Example: #FF5733) ",
      validate: (answer) => validateHTMLColorName(answer) || validateHTMLColorHex(answer),
  },
  {
    name: "Q3",
    type: "list",
    message: "Choose a shape",
    choices: ["Triangle", "Circle", "Square"],
  },
  {
    name: "Q4",
    message:
      "What would you like for the color of the shape? (Example: #FF5733) ",
      validate: (answer) => validateHTMLColorName(answer) || validateHTMLColorHex(answer),
  },
];

// AN OBJECT IS A BUNDLE OF RELATED INFORMATION, MODEL THE REAL WORLD, Describing
function init() {
  inquirer
    .prompt(questions)

    .then((answers) => {
      let svg = "";
      let shape;
      let text = answers.Q1;
      let textColor = answers.Q2;
      let shapeType = answers.Q3;
      let shapeColor = answers.Q4;

      if (shapeType == "Triangle") {
        shape = new Triangle(text, textColor, shapeColor);
      } else if (shapeType == "Circle") {
        shape = new Circle(text, textColor, shapeColor);
      } else if (shapeType == "Square") {
        shape = new Square(text, textColor, shapeColor);
      }

      svg = `
        <svg height ="200" width = "300">
        ${shape.render()}
        </svg>
        `;

      fs.writeFile("./examples/logo.svg", svg, (err) => {
        if (err) {
          console.error(err);
        }
      });
    })

    //The data is just a string so let svg needs to be an empty string
    // answers are just objects, we are printing out the objects
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        console.log(">>>error>>>", error);
      }
    });
}

// Function call to initialize app
init();
