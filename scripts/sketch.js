/*
 * Copyright (c) 2022 Michael Kolesidis
 * GNU General Public License v3.0
 */

let teddy;
let teddyColor;
let colored = false;

function preload() {
  // Load model with normalise parameter set to true
  teddy = loadModel("./assets/teddy.obj", false);
}

function setup() {
  let cnv = createCanvas(300, 400, WEBGL);
  cnv.parent("sketch");
}

function draw() {
  background(255);

  smooth();

  // Scaled to make model fit into canvas
  scale(0.75);

  noStroke();

  ambientLight(108, 108, 108);
  directionalLight(128, 128, 128, 0, 0, -1);

  normalMaterial();

  if (colored) {
    fill(teddyColor);
  }

  rotateX(PI / 1.17 + frameCount * 0.005);
  rotateY(PI / 0.88 + frameCount * 0.005);
  rotateZ(frameCount * 0.005);

  model(teddy);
}

function mousePressed() {
  teddyColor = color(random(40, 255), random(40, 255), random(40, 255));
  colored = true;
}
