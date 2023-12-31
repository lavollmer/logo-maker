//parent class to inherit from
class Shape {
  constructor(setColor, textLogo, colorTextLogo, shapeLogo) {
    this.setColor = setColor;
    this.textLogo = textLogo;
    this.colorTextLogo = colorTextLogo;
    this.shapeLogo = shapeLogo;
  }
}

//Square inherits from Shape - 300x200 pixel image
class Square extends Shape {
  renderSVG() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="100" y="50" width="100" height="100" fill="${this.setColor}"/><text x="150" y="100" font-size="20" text-anchor="middle" dominant-baseline="middle" fill="${this.colorTextLogo}">${this.textLogo}</text></svg>`
  }
}

//Circle inherits from Shape - 300x200 pixel image
class Circle extends Shape {
  renderSVG() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="80" fill="${this.setColor}"/><text x="100" y="125" font-size="60" text-anchor="middle" fill="${this.colorTextLogo}">${this.textLogo}</text></svg>`
  }
}

//Triangle inherits from Shape - 300x200 pixel image
class Triangle extends Shape {
  renderSVG() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,50 50,150 150, 150" fill="${this.setColor}"/><text x="100" y="130" font-size="20" text-anchor="middle" dominant-baseline="middle"  fill="${this.colorTextLogo}">${this.textLogo}</text></svg>`
  }
}

//exporting the variables to the other index.js
module.exports = {
  Circle,
  Square,
  Triangle
}; 