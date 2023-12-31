const { writeFile } = require("fs/promises");

//using inquirer for prompt
const inquirer = require("inquirer");

// define all items from other shapes.js
const { Triangle } = require("./lib/shapes.js");
const { Square } = require("./lib/shapes.js");
const { Circle } = require("./lib/shapes.js");

// intiatilizes the write file with SVG
function init() {
  inquirer.prompt([
    {
      type: "input",
      message: "What text would you like in your logo? (limit to 3 characters)",
      name: "textLogo",
      //validate the input length of the characters
      validate: function (input) {
        if (input.length > 3) {
          done("It must be less than 3 letters");
          return;
        }
        return true;
      }
    },
    {
      type: "list",
      message: "What color would you like your logo text to be?",
      name: "colorTextLogo",
      choices: ["red", "green", "blue", "yellow", "orange", "blue", "purple"]
    },
    {
      type: "list",
      message: "What shape would you like your logo to be?",
      name: "shapeLogo",
      choices: ["square", "circle", "triangle"]
    },
    {
      type: "list",
      message: "What color would you like your logo to be?",
      name: "colorLogo",
      choices: ["red", "green", "blue", "yellow", "orange", "blue", "purple"]
    }
  ]).then(answers => {
    console.log(answers);
    let shape;
    switch (answers.shapeLogo) {
      case "square":
        shape = new Square(answers.colorLogo, answers.textLogo, answers.colorTextLogo, answers.shapeLogo);
        break;
      case "circle":
        shape = new Circle(answers.colorLogo, answers.textLogo, answers.colorTextLogo, answers.shapeLogo);
        break;
      default:
        shape = new Triangle(answers.colorLogo, answers.textLogo, answers.colorTextLogo, answers.shapeLogo);
        break;
    }
    let myOutput = shape.renderSVG();
    console.log("myOutput = ", myOutput);
    // Generated logo.svg is print inline command
    console.log("Generated logo.svg!");
    //write the logomaker.svg file
    writeFile("logomaker.svg", myOutput);
  })
}

//starts the app
init();