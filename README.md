# logo-maker

## Project Description

The logo-maker project was to create a logo based on user input with SVG. The user is asked a series of questions such as color, shape, text color and text in logo. Technical requirements include using inquirer, jest, and writeFile SVG. Each image generated is a 300x200 pixel image size. Criteria met includes validating character length of user input, and "generated logo.svg" in the command line once the node index.js is read. 

This solves the problem of creating an SVG image for an end user.

## Usage

Video Submission: 

## Credits
This project was a product of the U of MN bootcamp Fall 2023.

Tutoring services was used to complete this project.The tutor helped with:
.then(answers => {
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

The tutor also helped with starting the shapes.test.js file:

const { Triangle } = require("./shapes.js");
const { Square } = require("./shapes.js");
const { Circle } = require("./shapes.js");


describe("Triangle", () => {
  test("test for triangle with color blue", () => {
    let expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,50 50,150 150, 150" fill="blue"/><text x="100" y="130" font-size="20" text-anchor="middle" dominant-baseline="middle"  fill="undefined">txt</text></svg>`;
    let actualShape = new Triangle("blue", "txt");
    let actualSVG = actualShape.renderSVG();
    // console.log("expectedSVG = ", expectedSVG);
    // console.log("actualSVG = ", actualSVG);
    expect(actualSVG).toEqual(expectedSVG);
  })
})

Validate input code on index.js was inspired by: (https://www.npmjs.com/package/inquirer/v/0.2.3)

## License
None