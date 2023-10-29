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

describe("Square", () => {
  test("test for square with color blue", () => {
    let expectedSVG = `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    <rect x="100" y="50" width="100" height="100" fill="blue"/><text x="150" y="100" font-size="20" text-anchor="middle" dominant-baseline="middle" fill="undefined">txt</text></svg>`;
    let actualShape = new Square("blue", "txt");
    let actualSVG = actualShape.renderSVG();
    // console.log("expectedSVG = ", expectedSVG);
    // console.log("actualSVG = ", actualSVG);
    expect(actualSVG).toEqual(expectedSVG);
  })
})

describe("Circle", () => {
  test("test for circle with color blue", () => {
    let expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="80" fill="blue"/><text x="100" y="125" font-size="60" text-anchor="middle" fill="undefined">txt</text></svg>`;
    let actualShape = new Circle("blue", "txt");
    let actualSVG = actualShape.renderSVG();
    // console.log("expectedSVG = ", expectedSVG);
    // console.log("actualSVG = ", actualSVG);
    expect(actualSVG).toEqual(expectedSVG);
  })
})