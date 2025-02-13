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
