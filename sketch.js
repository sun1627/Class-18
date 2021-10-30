var balls = [];

function setup() {
  createCanvas(400,400);
  balls.push(new Ball(150,0,40))

}

function draw() 
{
  background(30);
  for (var i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].display();
  }
}

function mousePressed () {
  var b = new Ball(mouseX, mouseY, 40);
  balls.push (b);
}