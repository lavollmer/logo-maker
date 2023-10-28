//parent class to inherit from
class Shape {
  constructor(setColor, textLogo) {
    this.setColor = setColor;
    this.textLogo = textLogo;
  }
}

//Square inherits from Shape
class Square extends Shape {
  constructor() {
    super(setColor, textLogo);
  }
}

//Circle inherits from Shape
class Circle extends Shape {
  constructor() {
    super(setColor, textLogo);
  }
}

//Triangle inherits from Shape
class Triangle extends Shape {
  constructor() {
    super(setColor, textLogo);
  }
}

// TODO: Create a new object using the Shape class constructor.
// const shape = new Shape(
//   `${answers.shapeLogo}`,
//   `${answers.colorLogo}`,
//   `${answers.textLogo}`
// );

//writing the SVG file using template literal of items
function renderSVG(answers) {
  return `
  <svg version ="1.1"
  width="300" height="200"
  xmls="http://www.w3.org/2000/svg"

  <rect width="100%" height="100%" fill="white" />

  <${answers.shapeLogo} cx="150" cy="100" r="80" fill="${answers.colorLogo}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.colorLogo}">${answers.textLogo}</text>

  </svg>
  `
}

//exporting the variables to the other index.js
module.exports = {
  Shape,
  Triangle,
  Square,
  Circle,
  renderSVG
}