const { Circle, Shape, Triangle, Square } = require("./shapes.js");

test( "Triangle returns polygon with text", () => {
    let triangle = new Triangle("svg", "gold", "purple");
    let content = triangle.render();
    expect(content).toBe('<polygon points="50 15, 100 100, 0 100" style="fill:purple ;stroke:purple;stroke-width:1"/>  <text x="30" y = "80" fill = "gold"> svg </text>');
})

test( "Circle returns circle with text", () => {
    let circle = new Circle("svg", "red", "blue");
    let content = circle.render();
    expect(content).toBe('<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="blue"/> <text x="35" y = "55" fill = "red"> svg</text>')
})

test( "Square returns square with text", () => {
    let square = new Square("svg", "green", "orange");
    let content = square.render();
    expect(content).toBe('<rect width="100" height="100" style="fill:orange;stroke-width:3;stroke:rgb(0,0,0)" /> <text x="35" y = "55" fill = "green"> svg</text>');
})