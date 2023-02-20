// Copyright (c) 2022 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

const ted = (sketch) => {
  let duck;
  let duckColor;
  let backgroundColor;

  sketch.preload = () => {
    // Load model with normalise parameter set to true will affect translate
    img = sketch.loadImage("assets/3d-models/duck.png");
    duck = sketch.loadModel("./assets/3d-models/duck.obj", false);
  };

  sketch.setup = () => {
    cnv = sketch.createCanvas(
      window.innerWidth,
      window.innerHeight > 800
        ? window.innerHeight - 140
        : window.innerHeight - 40,
      sketch.WEBGL
    );

    cnv.mouseClicked(sketch.recolorize);

    sketch.colorize();
  };

  sketch.draw = () => {
    sketch.background(backgroundColor);
    sketch.noStroke();
    sketch.ambientLight(100, 100, 100);
    sketch.directionalLight(255, 255, 255, 0, 0, -1);
    sketch.ambientMaterial(duckColor);

    if (window.innerWidth > 800) {
      // Desktop
      sketch.camera(
        0.1 * (sketch.mouseX - sketch.windowWidth / 2),
        0.2 * (sketch.mouseY - sketch.windowHeight / 2),
        250 + 0.04 * sketch.abs(sketch.mouseX - sketch.windowWidth / 2)
      );

      sketch.rotateX(sketch.PI - sketch.radians(30));
      sketch.rotateY(sketch.PI + sketch.radians(10));
      sketch.translate(0, -100, -20);
    } else {
      // Mobile
      sketch.rotateX(sketch.PI - sketch.radians(30));
      sketch.rotateY(sketch.PI + sketch.radians(10));
      sketch.scale((sketch.windowWidth / 1000) * 4);
    }

    sketch.texture(img);
    sketch.scale(200);
    // sketch.rotateY(sketch.frameCount * 0.01); // auto rotate model
    sketch.rotateY(0.1);
    sketch.model(duck);
  };

  sketch.colorize = () => {
    let chosenColor = generateColor();
    duckColor = chosenColor;
    backgroundColor = chosenColor;
  };

  sketch.recolorize = () => {
    let isNew = false;
    let oldColor = duckColor;
    let chosenColor;

    while (isNew === false) {
      chosenColor = generateColor();

      if (
        oldColor["levels"][0] !== chosenColor["levels"][0] ||
        oldColor["levels"][1] !== chosenColor["levels"][1] ||
        oldColor["levels"][2] !== chosenColor["levels"][2]
      ) {
        isNew = true;
      }
    }

    duckColor = chosenColor;
    backgroundColor = chosenColor;
  };

  sketch.windowResized = () => {
    sketch.resizeCanvas(window.innerWidth, window.innerHeight);
  };

  generateColor = () => {
    const colors = [
      {
        name: `pink`,
        hex: `#ff90e8`,
        rgb: `255, 144, 232`,
      },
      {
        name: `yellow`,
        hex: `#ffc900`,
        rgb: `255, 201, 0`,
      },
      {
        name: `orange`,
        hex: `#ff7051`,
        rgb: `255, 112, 81`,
      },
      {
        name: `green`,
        hex: `#3ecfc1`,
        rgb: `62, 207, 193`,
      },
      {
        name: `purple`,
        hex: `#90a8ed`,
        rgb: `62, 207, 193`,
      },
    ];

    const colorsP5 = [
      sketch.color(255, 144, 232),
      sketch.color(255, 201, 0),
      sketch.color(255, 112, 81),
      sketch.color(62, 207, 193),
      sketch.color(62, 207, 193),
    ];

    const num = Math.floor(Math.random() * colors.length);
    return colorsP5[num];
  };
};

const duckSketch = new p5(ted, "sketch-placeholder");
