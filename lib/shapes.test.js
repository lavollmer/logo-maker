const { Triangle } = require("./shapes.js");
const { Square } = require("./shapes.js");
const { Circle } = require("./shapes.js");

// testing Triangle shape
describe("Triangle", () => {
  test("test for triangle for shape", () => {
    let expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,50 50,150 150, 150" fill="undefined"/><text x="100" y="130" font-size="20" text-anchor="middle" dominant-baseline="middle"  fill="undefined">undefined</text></svg>`;
    let actualShape = new Triangle();
    let actualSVG = actualShape.renderSVG();
    expect(actualSVG).toEqual(expectedSVG);
  })
})

//testing for Square Shape
describe("Square", () => {
  test("test for square with shape Square", () => {
    let expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="100" y="50" width="100" height="100" fill="undefined"/><text x="150" y="100" font-size="20" text-anchor="middle" dominant-baseline="middle" fill="undefined">undefined</text></svg>`;
    let actualShape = new Square();
    let actualSVG = actualShape.renderSVG();
    expect(actualSVG).toEqual(expectedSVG);
  })
})


//testing for Circle Shape
describe("Circle", () => {
  test("test for circle for shape circle ", () => {
    let expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="80" fill="undefined"/><text x="100" y="125" font-size="60" text-anchor="middle" fill="undefined">undefined</text></svg>`;
    let actualShape = new Circle();
    let actualSVG = actualShape.renderSVG();
    expect(actualSVG).toEqual(expectedSVG);
  })
})


//testing Triangle colors
describe("Triangle", () => {
  test("test for triangle with color blue", () => {
    let expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,50 50,150 150, 150" fill="blue"/><text x="100" y="130" font-size="20" text-anchor="middle" dominant-baseline="middle"  fill="undefined">txt</text></svg>`;
    let actualShape = new Triangle("blue", "txt");
    let actualSVG = actualShape.renderSVG();
    expect(actualSVG).toEqual(expectedSVG);
  })
})

describe("Triangle", () => {
  test("test for triangle with color green", () => {
    let expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,50 50,150 150, 150" fill="green"/><text x="100" y="130" font-size="20" text-anchor="middle" dominant-baseline="middle"  fill="undefined">txt</text></svg>`;
    let actualShape = new Triangle("green", "txt");
    let actualSVG = actualShape.renderSVG();
    expect(actualSVG).toEqual(expectedSVG);
  })
})

describe("Triangle", () => {
  test("test for triangle with color yellow", () => {
    let expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,50 50,150 150, 150" fill="yellow"/><text x="100" y="130" font-size="20" text-anchor="middle" dominant-baseline="middle"  fill="undefined">txt</text></svg>`;
    let actualShape = new Triangle("yellow", "txt");
    let actualSVG = actualShape.renderSVG();
    expect(actualSVG).toEqual(expectedSVG);
  })
})

describe("Triangle", () => {
  test("test for triangle with color orange", () => {
    let expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,50 50,150 150, 150" fill="orange"/><text x="100" y="130" font-size="20" text-anchor="middle" dominant-baseline="middle"  fill="undefined">txt</text></svg>`;
    let actualShape = new Triangle("orange", "txt");
    let actualSVG = actualShape.renderSVG();
    expect(actualSVG).toEqual(expectedSVG);
  })
})

describe("Triangle", () => {
  test("test for triangle with color purple", () => {
    let expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,50 50,150 150, 150" fill="purple"/><text x="100" y="130" font-size="20" text-anchor="middle" dominant-baseline="middle"  fill="undefined">txt</text></svg>`;
    let actualShape = new Triangle("purple", "txt");
    let actualSVG = actualShape.renderSVG();
    expect(actualSVG).toEqual(expectedSVG);
  })
})

//testing Square colors and txt
describe("Square", () => {
  test("test for square with color blue", () => {
    let expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="100" y="50" width="100" height="100" fill="blue"/><text x="150" y="100" font-size="20" text-anchor="middle" dominant-baseline="middle" fill="undefined">txt</text></svg>`;
    let actualShape = new Square("blue", "txt");
    let actualSVG = actualShape.renderSVG();
    expect(actualSVG).toEqual(expectedSVG);
  })
})

describe("Square", () => {
  test("test for square with color yellow", () => {
    let expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="100" y="50" width="100" height="100" fill="yellow"/><text x="150" y="100" font-size="20" text-anchor="middle" dominant-baseline="middle" fill="undefined">txt</text></svg>`;
    let actualShape = new Square("yellow", "txt");
    let actualSVG = actualShape.renderSVG();
    expect(actualSVG).toEqual(expectedSVG);
  })
})

describe("Square", () => {
  test("test for square with color orange", () => {
    let expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="100" y="50" width="100" height="100" fill="orange"/><text x="150" y="100" font-size="20" text-anchor="middle" dominant-baseline="middle" fill="undefined">txt</text></svg>`;
    let actualShape = new Square("orange", "txt");
    let actualSVG = actualShape.renderSVG();
    expect(actualSVG).toEqual(expectedSVG);
  })
})


describe("Square", () => {
  test("test for square with color purple", () => {
    let expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="100" y="50" width="100" height="100" fill="purple"/><text x="150" y="100" font-size="20" text-anchor="middle" dominant-baseline="middle" fill="undefined">txt</text></svg>`;
    let actualShape = new Square("purple", "txt");
    let actualSVG = actualShape.renderSVG();
    expect(actualSVG).toEqual(expectedSVG);
  })
})


describe("Square", () => {
  test("test for square with color blue", () => {
    let expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="100" y="50" width="100" height="100" fill="blue"/><text x="150" y="100" font-size="20" text-anchor="middle" dominant-baseline="middle" fill="undefined">txt</text></svg>`;
    let actualShape = new Square("blue", "txt");
    let actualSVG = actualShape.renderSVG();
    expect(actualSVG).toEqual(expectedSVG);
  })
})


describe("Square", () => {
  test("test for square with color green", () => {
    let expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="100" y="50" width="100" height="100" fill="green"/><text x="150" y="100" font-size="20" text-anchor="middle" dominant-baseline="middle" fill="undefined">txt</text></svg>`;
    let actualShape = new Square("green", "txt");
    let actualSVG = actualShape.renderSVG();
    expect(actualSVG).toEqual(expectedSVG);
  })
})


//testing Circle colors and txt
describe("Circle", () => {
  test("test for circle with color blue", () => {
    let expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="80" fill="blue"/><text x="100" y="125" font-size="60" text-anchor="middle" fill="undefined">txt</text></svg>`;
    let actualShape = new Circle("blue", "txt");
    let actualSVG = actualShape.renderSVG();
    expect(actualSVG).toEqual(expectedSVG);
  })
})

describe("Circle", () => {
  test("test for circle with color green", () => {
    let expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="80" fill="green"/><text x="100" y="125" font-size="60" text-anchor="middle" fill="undefined">txt</text></svg>`;
    let actualShape = new Circle("green", "txt");
    let actualSVG = actualShape.renderSVG();
    expect(actualSVG).toEqual(expectedSVG);
  })
})

describe("Circle", () => {
  test("test for circle with color yellow", () => {
    let expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="80" fill="yellow"/><text x="100" y="125" font-size="60" text-anchor="middle" fill="undefined">txt</text></svg>`;
    let actualShape = new Circle("yellow", "txt");
    let actualSVG = actualShape.renderSVG();
    expect(actualSVG).toEqual(expectedSVG);
  })
})

describe("Circle", () => {
  test("test for circle with color orange", () => {
    let expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="80" fill="orange"/><text x="100" y="125" font-size="60" text-anchor="middle" fill="undefined">txt</text></svg>`;
    let actualShape = new Circle("orange", "txt");
    let actualSVG = actualShape.renderSVG();
    expect(actualSVG).toEqual(expectedSVG);
  })
})