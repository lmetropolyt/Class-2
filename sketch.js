var x = 0;
var y = 0;

function setup(){
    createCanvas(720,150);
}

// playing with the feature we learned in class by making more stars and changing the colour!!!!
function draw(){
    background('#FFF68F'); // automatic semicolon intertion
    fill('lime');
    star(x, y, 5, 15, 4);
    star(x+100, y, 5, 15, 4);
    star(x+200, y, 5, 15, 4);
    star(x+300, y, 5, 15, 4);
    star(x+400, y, 5, 15, 4);
    star(x+500, y, 5, 15, 4);
    star(x+600, y, 5, 15, 4);
    star(x+700, y, 5, 15, 4);
    x = x + 1;
    x = x % 700; //modulo operator
    y = y + 2;
    y = y % 150;


}

// function from p5.js docs! https://archive.p5js.org/examples/form-star.html
function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }