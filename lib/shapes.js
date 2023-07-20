//CLASSES ARE A BIG PART OF OBJECT ORIENTED PROGRAMMING

//making differint functions

class Shape{
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    
render () {
    return '  <rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />',

    
}
}

//shape will have a render func
//class is the blue print and it is factory that creates objects (shapes in this example)

class Triangle extends Shape {
    render () {
        return '<polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" />';
    }
}

//Triangle is derived from the shape class.  Model real world as best we can.
//extends is the first step.  It literrary inherits the parameters.

class Circle extends Shape {
    render () {
        return `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.shapeColor}"/>`;
    }
}

class Rectangle extends Shape {
    render () {
        return '<polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" />';
    }
}


module.exports = (
    Shape,
    Triangle,
    Circle,
)
