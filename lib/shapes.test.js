const { Triangle } = require("./shapes.js");
const { Square } = require("./shapes.js");
const { Circle } = require("./shapes.js");


describe("Circle", () => {
  test("test for circle with color blue", () => {
    let expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="blue"/>
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">txt</text>
    </svg>`;
    let actualShape = new Circle("blue", "txt");
    let actualSVG = actualShape.renderSVG();
    // console.log("expectedSVG = ", expectedSVG);
    // console.log("actualSVG = ", actualSVG);
    expect(actualSVG).toEqual(expectedSVG);
  })
})