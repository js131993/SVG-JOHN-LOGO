// GIVEN a command-line application that accepts user input
var inquirer = require('inquirer');
const fs = require('fs');
// WHEN I am prompted for text

// THEN I can enter up to three characters

// WHEN I am prompted for the text color

// THEN I can enter a color keyword (OR a hexadecimal number)

// WHEN I am prompted for a shape

// THEN I am presented with a list of shapes to choose from: circle, triangle, and square

// WHEN I am prompted for the shape's color

// THEN I can enter a color keyword (OR a hexadecimal number)

// WHEN I have entered input for all the prompts

// THEN an SVG file is created named `logo.svg`

// AND the output text "Generated logo.svg" is printed in the command line

// WHEN I open the `logo.svg` file in a browser

// THEN I am shown a 300x200 pixel image that matches the criteria I entered
// TODO: Include packages needed for this application
// TODO: Create an array of questions for user input
const questions = [{
            name: "Q1",
            message: "Text to diplay inside of shape.",
            validate: (answer) => answer.length < 4
        },
        {
            name: "Q2",
            message: "What would you like for the color of the text? (Example: #FF5733) ",
        }, 
        {
            name:"Q3",
            type: "list",
            message:"Choose a shape",
            choices: [
                "Triangle",
                "Circle",
                "Square"
        ]
        },
        {
            name: "Q4",
            message: "What would you like for the color of the shape? (Example: #FF5733) ",
        },
        {
        name: "Q5",
        message: "How do you use?",
        }
];




// AN OBJECT IS A BUNDLE OF RELATED INFORMATION, MODEL THE REAL WORLD, Describing
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const content =
`# ${data.title}
### DESCRIPTION
  ${data.description}

###Table Of Contents
- [License](#license)
- [Installation](#installation)
- [Usage](#usage)

###LICENSE
  ${data.license}

###INSTALLATION
  ${data.installation}
  
### USAGE
  ${data.usage}`;

fs.writeFile(fileName, content, err => 
{
  if (err) {
    console.error(err);
  }
  // file written successfully
});
}


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
 
  .then((answers) => {
    let svg = {};
    svg.text = answers.Q1;
    readme.textColor = answers.Q2;
    readme.shape = answers.Q3;
    readme.shapeColor = answers.Q4;
    readme.usage = answers.Q5;
    writeToFile("./READMETest.md", readme);

  })
  // answers are just objects, we are printing out the objects
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      console.log(">>>error>>>", error)
    }
  });

}

// Function call to initialize app
init();