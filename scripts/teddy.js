// Copyright (c) 2022 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

let ted = (sketch) => {
  let teddy;
  let teddyColor;
  let backgroundColor;

  sketch.preload = () => {
    // Load model with normalise parameter set to true will affect translate
    teddy = sketch.loadModel("./assets/3d-models/teddy.obj", false);
  };

  sketch.setup = () => {
    cnv = sketch.createCanvas(
      window.innerWidth,
      window.innerHeight - 140,
      sketch.WEBGL
    );

    cnv.mouseClicked(sketch.colorize);

    const teddyR = Math.floor(Math.random() * 121 + 110);
    const teddyG = Math.floor(Math.random() * 121 + 110);
    const teddyB = Math.floor(Math.random() * 121 + 110);

    teddyColor = (teddyR, teddyG, teddyB);

    backgroundColor = sketch.color(
      Math.floor(Math.random() * 131 + 120),
      Math.floor(Math.random() * 131 + 120),
      Math.floor(Math.random() * 131 + 120)
    );
  };

  sketch.draw = () => {
    sketch.background(backgroundColor);
    sketch.noStroke();
    sketch.ambientLight(108, 108, 108);
    sketch.directionalLight(128, 128, 128, 0, 0, -1);

    sketch.ambientMaterial(teddyColor);

    if (window.innerWidth > 800) {
      // Desktop
      sketch.camera(
        0.1 * (sketch.mouseX - sketch.windowWidth / 2),
        0.2 * (sketch.mouseY - sketch.windowHeight / 2),
        250 + 0.04 * sketch.abs(sketch.mouseX - sketch.windowWidth / 2)
      );

      sketch.rotateX(sketch.PI - sketch.radians(30));
      sketch.rotateY(sketch.PI + sketch.radians(10));

      sketch.translate(0, -50, 40);
    } else {
      // Mobile
      sketch.rotateX(sketch.PI - sketch.radians(30));
      sketch.rotateY(sketch.PI + sketch.radians(10));

      sketch.translate(-20, 0, 200);
      sketch.scale((sketch.windowWidth / 1000) * 4);
    }

    sketch.model(teddy);
  };

  sketch.colorize = () => {
    teddyColor = sketch.color(
      Math.floor(Math.random() * 121 + 110),
      Math.floor(Math.random() * 121 + 110),
      Math.floor(Math.random() * 121 + 110)
    );
    backgroundColor = sketch.color(
      Math.floor(Math.random() * 131 + 120),
      Math.floor(Math.random() * 131 + 120),
      Math.floor(Math.random() * 131 + 120)
    );
  };

  sketch.keyPressed = () => {
    sketch.colorize();
  };

  sketch.windowResized = () => {
    sketch.resizeCanvas(window.innerWidth, window.innerHeight);
  };
};

let teddySketch = new p5(ted, "sketch-placeholder");
