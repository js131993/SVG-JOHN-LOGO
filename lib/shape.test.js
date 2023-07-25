const { Circle, Shape, Triangle, Square } = require("./shapes.js");

test( "Triangle returns polygob with text", () => {
    let triangle = new Triangle("svg", "gold", "purple");
    let content = triangle.render();
    expect(content).toBe('<polygon points="50 15, 100 100, 0 100" style="fill:purple ;stroke:purple;stroke-width:1"/>  <text x="30" y = "80" fill = "gold"> svg </text>');
})