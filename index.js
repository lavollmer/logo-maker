
const fs = require("fs")

//using inquirer for prompt
const inquirer = require("inquirer")

// shapes function
const { shapes } = require("./lib/shapes");

//asking user prompt questions for logo
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
  //write the logosvg file
  fs.writeFile("logo.svg", answers, (error) => {
    if (error) console.log("error");
    // run the user answers through the shapes function
    console.log(shapes(answers.textLogo, answers.colorTextLogo, answers.shapeLogo, answers.colorLogo))
  })
})