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
      message: "What text would you like in your logo?",
      name: "textLogo"
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
    writeFile("logomaker.svg", myOutput);
  })
}

//starts the app
init();