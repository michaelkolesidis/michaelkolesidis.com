/*
 *  Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 *  ATTENTION! FREE SOFTWARE
 *  This website is free software (free as in freedom).
 *  If you use any part of this code, you must make your entire project's source code
 *  publicly available under the same license. This applies whether you modify the code
 *  or use it as it is in your own project. This ensures that all modifications and
 *  derivative works remain free software, so that everyone can benefit.
 *  If you are not willing to comply with these terms, you must refrain from using any part of this code.
 *
 *  For full license terms and conditions, you can read the AGPL-3.0 here:
 *  https://www.gnu.org/licenses/agpl-3.0.html
 */

if (window.innerWidth > 700) {
  const duck = (sketch) => {
    let duck;

    // Variables to smoothly transition between mouse control and auto-rotation
    let camX = 0;
    let camY = 0;
    let targetCamX = 0;
    let targetCamY = 0;

    sketch.preload = () => {
      img = sketch.loadImage('assets/3d-models/duck.png');
      duck = sketch.loadModel('./assets/3d-models/duck.obj', false);
    };

    sketch.setup = () => {
      cnv = sketch.createCanvas(
        window.innerWidth,
        window.innerHeight - 140,
        sketch.WEBGL
      );
    };

    sketch.draw = () => {
      sketch.background(0, 0, 0, 0);
      sketch.noStroke();
      sketch.ambientLight(100, 100, 100);
      sketch.directionalLight(255, 255, 255, 0, 0, -1);

      let isMouseInBounds =
        sketch.mouseX > 0 &&
        sketch.mouseX < sketch.width &&
        sketch.mouseY > 0 &&
        sketch.mouseY < sketch.height;

      if (isMouseInBounds) {
        // Mouse is over the canvas, smoothly follow the mouse position
        targetCamX = 0.1 * (sketch.mouseX - sketch.windowWidth / 2);
        targetCamY = 0.2 * (sketch.mouseY - sketch.windowHeight / 2);
      } else {
        // Mouse is out of bounds, smoothly transition to auto-rotation
        targetCamX = 50 + Math.sin(sketch.frameCount * 0.015) * 40; // X-axis movement
        targetCamY = -50; // Keep Y-axis steady during auto-rotation
      }

      // Smooth interpolation between current and target camera positions
      camX = sketch.lerp(camX, targetCamX, 0.035);
      camY = sketch.lerp(camY, targetCamY, 0.035);

      sketch.camera(camX, camY, 250);

      sketch.rotateX(sketch.PI - sketch.radians(30));
      sketch.rotateY(sketch.PI + sketch.radians(10));
      sketch.translate(0, -100, -20);

      sketch.texture(img);
      sketch.scale(210);
      sketch.model(duck);
    };

    sketch.windowResized = () => {
      sketch.resizeCanvas(window.innerWidth, window.innerHeight - 140);
    };
  };

  const duckSketch = new p5(duck, 'sketch-placeholder');
}
