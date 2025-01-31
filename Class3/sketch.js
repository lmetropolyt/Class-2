


function setup(){
    createCanvas(720,480);
}

    function draw(){
      background(0,15,50,10);
      if(mouseX < 200){
        star(mouseX,mouseY,5,15,4);
      }else{
        rect(mouseX,mouseY,100,10,10);
      }
}

//star taken from my 'start a website' code
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  fill('yellow')
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