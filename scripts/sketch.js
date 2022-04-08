let x, y;
let newX, newY;

function setup() {
  let cnv = createCanvas(300, 300);
  cnv.parent("sketch");
  background(255);
  x = width / 2;
  y = height / 2;
}

function draw() {
  strokeWeight(0.1);
  
  let radius = random(150);
  let a = random(TWO_PI);

  newX = width / 2 + cos(a) * radius;
  newY = height / 2 + sin(a) * radius;
  line(x, y, newX, newY);
  x = newX;
  y = newY;
}