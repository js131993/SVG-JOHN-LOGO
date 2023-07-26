//CLASSES ARE A BIG PART OF OBJECT ORIENTED PROGRAMMING

//making differint functions

class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  render() {
    return '  <rect width="300" height="300" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />';
  }
}
//shape will have a render func
//class is the blue print and it is factory that creates objects (shapes in this example)

class Triangle extends Shape {
  render() {
    return `<polygon points="50 15, 100 100, 0 100" style="fill:${this.shapeColor} ;stroke:purple;stroke-width:1"/>  <text x="30" y = "80" fill = "${this.textColor}"> ${this.text} </text>`;
  }
}

//Triangle is derived from the shape class.  Model real world as best we can.
//extends is the first step.  It literrary inherits the parameters.

class Circle extends Shape {
  render() {
    return `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.shapeColor}"/> <text x="35" y = "55" fill = "${this.textColor}"> ${this.text}</text>`;
  }
}

class Square extends Shape {
  render() {
    return `<rect width="100" height="100" style="fill:${this.shapeColor};stroke-width:3;stroke:rgb(0,0,0)" /> <text x="35" y = "55" fill = "${this.textColor}"> ${this.text}</text>`;
  }
}

module.exports = {
  Shape,
  Triangle,
  Square,
  Circle,
};
