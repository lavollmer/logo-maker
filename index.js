const { writeFile } = require("fs/promises");

//using inquirer for prompt
const inquirer = require("inquirer");

// define all items from other shapes.js
const { Triangle } = require("./lib/shapes.js");
const { Square } = require("./lib/shapes.js");
const { Circle } = require("./lib/shapes.js");
// const { renderSVG } = require("./lib/shapes");

//asking user prompt questions for logo
// inquirer.prompt([
//   {
//     type: "input",
//     message: "What text would you like in your logo?",
//     name: "textLogo"
//   },
//   {
//     type: "list",
//     message: "What color would you like your logo text to be?",
//     name: "colorTextLogo",
//     choices: ["red", "green", "blue"]
//   },
//   {
//     type: "list",
//     message: "What shape would you like your logo to be?",
//     name: "shapeLogo",
//     choices: ["square", "circle", "triangle"]
//   },
//   {
//     type: "list",
//     message: "What color would you like your logo to be?",
//     name: "colorLogo",
//     choices: ["red", "green", "blue"]
//   }
// ]).then(answers => {
//   console.log(answers);
//   return answers;
// })


// give error if doesn't run
// function writeFile(answers) {
//   //write the logosvg file
//   fs.writeFile('logo.svg', answers, (err) =>
//     err ? console.error(err) : console.log('Done!'))
// }

// intiatilizes the write file with SVG
function init() {
  //write the logosvg file
  // inquirer.prompt().then(answers => {
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
      choices: ["red", "green", "blue"]
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
      choices: ["red", "green", "blue"]
    }
  ]).then(answers => {
    console.log(answers);
    let shape;
    switch (answers.shapeLogo) {
      case "square":
        shape = new Square(answers.colorLogo, answers.textLogo);
        break;
      case "circle":
        shape = new Circle(answers.colorLogo, answers.textLogo);
        break;
      default:
        shape = new Triangle(answers.colorLogo, answers.textLogo);
        break;
    }
    let myOutput = shape.renderSVG();
    console.log("myOutput = ", myOutput);
    writeFile("logomaker.svg", myOutput);
  })
}

//starts the app
init();