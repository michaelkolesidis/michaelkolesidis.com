// © 2022 Michael Kolesidis. All rights reserved.
// michael.kolesidis@gmail.com

const projectList = [
  {
    name: "JSS-01",
    image: "../../data/images/jss-01.png?v=2",
    technologies: "Tone.js, WEBMIDI.js, JavaScript, Sass, npm",
    summary:
      "My flagship project. The JavaScript Software Synthesizer is a powerful synthesizer build with web technologies.",
    description: `The JavaScript Software Synthesizer is a web application
                  enabling users to make and play music in the browser. It is
                  a software synthesizer utilizing the Web Audio API by
                  implementing a variety of JavaScript libraries.`,
    repository:
      "https://github.com/michaelkolesidis/javascript-software-synthesizer",
    deployment: "https://javascript-software-synthesizer.netlify.app/",
    video: "",
    visible: true,
  },

  {
    name: "Tenzi",
    image: "../../data/images/tenzi.gif",
    technologies: "React, JavaScript, Sass",
    summary:
      "A dice game at which the player needs to roll dice until they are all the same. Best scores are saved to local storage.",
    description: "",
    repository: "https://github.com/michaelkolesidis/tenzi",
    deployment: "https://tenzi-react.netlify.app/",
    video: "",
    visible: true,
  },

  {
    name: "Minesweeper Emoji",
    image: "../../data/images/minesweeper-emoji-02.gif",
    technologies: "p5.js, JavaScript, CSS",
    summary: "The classic game reimagined and implemented with emojis.",
    description: `The classic Minesweeper game reimagined and implemented with emojis. 
                  It is an example of object-based JavaScript, each Cell is an instance 
                  of the class Cell. Mines are allocated randomly on page load.`,
    repository: "https://github.com/michaelkolesidis/minesweeper-emoji",
    deployment: "https://minesweeper-emoji.netlify.app/",
    video: "",
    visible: true,
  },

  {
    name: "Camel Notes",
    image: "../../data/images/camelnotes.gif",
    technologies: "React, JavaScript",
    summary: "A simple note-taking web application in React",
    description: "",
    repository: "https://github.com/michaelkolesidis/camelnotes",
    deployment: "https://github.com/michaelkolesidis/camelnotes",
    video: "",
    visible: true,
  },

  {
    name: "Japanese Restaurant",
    image: "../../data/images/japanese-restaurant.png?v=2",
    technologies: "JavaScript, Sass, Webpack, npm",
    summary:
      "A JavaScript single-page application (SPA) showcasing the use of ES6 modules as well as Webpack.",
    description: "",
    repository: "https://github.com/michaelkolesidis/japanese-restaurant",
    deployment: "http://michaelkolesidis.com/japanese-restaurant/",
    video: "",
    visible: true,
  },

  {
    name: "Landmarks",
    image: "../../data/images/landmarks.png?v=2",
    technologies: "React, JavaScript, Webpack, npm",
    summary: "A React web application showing landmarks around the globe.",
    description: "",
    repository: "https://github.com/michaelkolesidis/react-landmarks",
    deployment: "https://react-landmarks.netlify.app/",
    video: "",
    visible: true,
  },

  {
    name: "Music Reviews",
    image: "../../data/images/music-reviews.png?v=2",
    technologies: "TypeScript, npm",
    summary:
      "A (basic) music reviews web app made with and demonstrating the use of TypeScript.",
    description: "",
    repository: "https://github.com/michaelkolesidis/music-reviews",
    deployment: "https://music-reviews.netlify.app/",
    video: "",
    visible: true,
  },

  {
    name: "Sports App",
    image: "../../data/images/sport-app-pwa.png?v=2",
    technologies: "JavaScript, CSS",
    summary:
      "Sports App is a progressive web application enabling the user to create custom tables.",
    description: "",
    repository: "https://github.com/michaelkolesidis/sports-app-pwa",
    deployment: "https://sports-app-pwa.netlify.app/",
    video: "",
    visible: true,
  },

  {
    name: "Perlin Landscape",
    image: "../../data/images/perlin-landscape.gif",
    technologies: "p5.js, CCapture.js, JavaScript",
    summary: "Landscape created dynamically using Perlin noise.",
    description: "",
    repository: "https://github.com/michaelkolesidis/perlin-landscape",
    deployment: "https://perlin-landscape.netlify.app/",
    video: "",
    visible: true,
  },

  {
    name: "Particircle",
    image: "../../data/images/particircle.gif",
    technologies: "p5.js, JavaScript",
    summary: "A circle of particles.",
    description: "",
    repository: "https://github.com/michaelkolesidis/particircle",
    deployment: "https://particircle.netlify.app/",
    video: "",
    visible: true,
  },

  {
    name: "Fractal Mountain",
    image: "../../data/images/fractal-mountain.gif",
    technologies: "p5.js, CCapture.js, JavaScript",
    summary: "A single triangle transforms into a mountain.",
    description: "",
    repository: "https://github.com/michaelkolesidis/fractal-mountain",
    deployment: "https://fractal-mountain.netlify.app/",
    video: "",
    visible: true,
  },

  {
    name: "Pong",
    image: "../../data/images/pong.gif",
    technologies: "Processing, Java",
    summary: "The classic Pong game recreated from scratch.",
    description: "",
    repository: "https://github.com/michaelkolesidis/pong-processing",
    deployment: "https://github.com/michaelkolesidis/pong-processing",
    video: "",
    visible: true,
  },

  {
    name: "Electronic Drum Kit",
    image: "../../data/images/electronic-drum-kit.png?v=2",
    technologies: "JavaScript, CSS",
    summary: "An Electronic Drumkit that can be used with mouse or keyboard.",
    description: "",
    repository: "https://github.com/michaelkolesidis/electronic-drum-kit",
    deployment: "https://electronic-drumkit-js.netlify.app/",
    video: "",
    visible: true,
  },

  {
    name: "Sticky Notes",
    image: "../../data/images/sticky-notes.png",
    technologies: "TypeScript, CSS",
    summary:
      "A web application allowing the user to fill the screen with sticky notes of various colors.",
    description: "",
    repository: "https://github.com/michaelkolesidis/sticky-notes",
    deployment: "https://sticky-notes-ts.netlify.app/",
    video: "",
    visible: true,
  },

  {
    name: "Tic-Tac-Toe",
    image: "../../data/images/tic-tac-toe.png?v=2",
    technologies: "JavaScript, CSS",
    summary:
      "The popular Tic-tac-toe game, implemented with vanilla JavaScript.",
    description: "",
    repository: "https://github.com/michaelkolesidis/tic-tac-toe",
    deployment: "https://tic-tac-toe-michael.netlify.app/",
    video: "",
    visible: true,
  },

  {
    name: "Olympics",
    image: "../../data/images/olympics.png?v=2",
    technologies: "CSS",
    summary:
      "An animation-abundant responsive website showing Olympics results.",
    description: "",
    repository: "https://github.com/michaelkolesidis/project-olympics",
    deployment: "https://project-olympics.netlify.app/",
    video: "",
    visible: true,
  },

  {
    name: "CSS 3D",
    image: "../../data/images/css-3d.png?v=2",
    technologies: "CSS",
    summary: "A simple website showcasing CSS 3D examples and how they work.",
    description: "",
    repository: "https://github.com/michaelkolesidis/css-3d",
    deployment: "https://css-3d.netlify.app/",
    video: "",
    visible: true,
  },

  {
    name: "Scribble Text",
    image: "../../data/images/scribble-text.gif",
    technologies: "p5.js, JavaScript",
    summary: "Text gradually appears whilte scribbling.",
    description: "",
    repository: "https://github.com/michaelkolesidis/scribble-text",
    deployment: "https://scribble-text.netlify.app/",
    video: "",
    visible: true,
  },

  {
    name: "Intersecting Circles",
    image: "../../data/images/intersecting-circles.gif",
    technologies: "p5.js, JavaScript",
    summary: "Colorful explosions occur when two circles are interescting.",
    description: "",
    repository: "https://github.com/michaelkolesidis/intersecting-circles",
    deployment: "https://intersecting-circles.netlify.app/",
    video: "",
    visible: true,
  },

  {
    name: "Random Triangles Cube",
    image: "../../data/images/random-triangles-cube.gif",
    technologies: "Three.js, JavaScript",
    summary:
      "Random triangles form a cube. Right/left-click, move mouse and scroll to explore. Double-click to toggle fullscreen mode.",
    description: "",
    repository: "https://github.com/michaelkolesidis/random-triangles-cube",
    deployment: "https://random-triangles-cube.netlify.app/",
    video: "",
    visible: true,
  },

  {
    name: "Circle Random Lines",
    image: "../../data/images/circle-random-lines.gif",
    technologies: "p5.js, JavaScript",
    summary: "A circle created dynamically by random lines",
    description: "",
    repository: "https://github.com/michaelkolesidis/circle-random-lines",
    deployment: "https://circle-random-lines.netlify.app/",
    video: "",
    visible: true,
  },

  {
    name: "3D Cube",
    image: "../../data/images/3d-cube.gif",
    technologies: "p5.js, JavaScript",
    summary: "A 3D cube rotating according to mouse movement.",
    description: "",
    repository: "https://github.com/michaelkolesidis/3d-cube",
    deployment: "https://3d-cubejs.netlify.app/",
    video: "",
    visible: true,
  },

  {
    name: "3D Teddy Bear",
    image: "../../data/images/teddy.gif",
    technologies: "p5.js, JavaScript",
    summary: "A rotating 3D Teddy Bear animation",
    description: "",
    repository: "https://github.com/michaelkolesidis/3d-teddy-bear",
    deployment: "https://3d-teddy-bear.netlify.app/",
    video: "",
    visible: true,
  },

  {
    name: "Move Square",
    image: "../../data/images/move-square.gif",
    technologies: "TypeScript, SVG, CSS",
    summary: "A simple SVG example featuring a movable square.",
    description: "",
    repository: "https://github.com/michaelkolesidis/move-square",
    deployment: "https://move-square.netlify.app/",
    video: "",
    visible: true,
  },
];

export default projectList;

// EMPTY PROJECT TEMPLATE

// {
//   name: "",
//   image: "../../data/images/",
//   technologies: "",
//   summary: "",
//   description: "",
//   repository: "",
//   deployment: "",
//   video: "",
//   visible: true,
// },
