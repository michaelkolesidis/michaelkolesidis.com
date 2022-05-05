let teddy;
let teddyColor;
let colored = false;
let backgroundColor;

function preload() {
  // Load model with normalise parameter set to true
  teddy = loadModel("./assets/teddy.obj", false);
}

function setup() {
  let cnv = createCanvas(window.innerWidth - 5, window.innerHeight - 5, WEBGL);
  cnv.parent("sketch-placeholder");
  backgroundColor = color(0, 0, 0);
}

function draw() {
  background(backgroundColor);

  smooth();

  // Scaled to make model fit into canvas
  // scale(window.innerHeight / 400);

  noStroke();

  ambientLight(108, 108, 108);
  directionalLight(128, 128, 128, 0, 0, -1);

  normalMaterial();

  if (colored) {
    ambientMaterial(teddyColor);
  }

  camera(
    0.1 * (mouseX - windowWidth / 2),
    0.2 * (mouseY - windowHeight / 2),
    250 + 0.04 * abs(mouseX - windowWidth / 2)
  );

  rotateX(PI - radians(30));
  rotateY(PI + radians(10));

  translate(0, -50, 40);

  model(teddy);
}

function colorize() {
  teddyColor = color(random(40, 255), random(40, 255), random(40, 255));
  backgroundColor = color(random(40), random(40), random(40));
  colored = true;
}

function mousePressed() {
  colorize();
}

function keyPressed() {
  colorize();
}

function windowResized() {
  resizeCanvas(window.innerWidth - 5, window.innerHeight - 5);
}

// Change color on scroll
// let wheelCount = 0;

// function mouseWheel() {
//   wheelCount += 1;
//   if (wheelCount > 5) {
//     wheelCount = 0;
//     colorize();
//   }
// }