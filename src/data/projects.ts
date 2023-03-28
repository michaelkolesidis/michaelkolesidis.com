// https://michaelkolesidis.com
// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

const projectList = [
  {
    name: "JSS-01",
    image: "../../images/jss-01.png?v=2",
    technologies: "Tone.js, WEBMIDI.js, TypeScript, JavaScript, Sass",
    summary: "A powerful software synthesizer build with web technologies.",
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
    name: "Emoji Minesweeper",
    image: "../../images/emoji-minesweeper.png?v=2",
    technologies: "p5.js, JavaScript, CSS",
    summary:
      "Minesweeper made with emojis. The most fun way to play minesweeper!",
    description:
      "The game logic and anything that happens inside the board\n is written in p5.js. The board is drawn inside a canvas element,\n with the help of the p5.js library. The rest of the UI\n is written in vanilla JavaScript.",
    repository: "https://github.com/michaelkolesidis/emoji-minesweeper",
    deployment: "https://emojiminesweeper.com/",
    video: "",
    visible: true,
  },

  {
    name: "synthétique",
    image: "../../images/synthetique.png",
    technologies: "Three.js, JavaScript, CSS",
    summary: "Retrofuturistic demo.",
    description: "",
    repository: "https://github.com/michaelkolesidis/synthetique",
    deployment: "https://synthetique.vercel.app/",
    video: "",
    visible: true,
  },

  {
    name: "Bird Generator",
    image: "../../images/bird-generator.png",
    technologies: "p5.js, JavaScript, CSS",
    summary: "A Bird Generator™ for the creation of all sorts of birds.",
    description: "",
    repository: "https://github.com/michaelkolesidis/bird-generator",
    deployment: "https://bird-generator.vercel.app/",
    video: "",
    visible: true,
  },

  {
    name: "Perlin Landscape",
    image: "../../images/perlin-landscape.gif",
    technologies: "p5.js, JavaScript",
    summary: "Landscape created dynamically using Perlin noise.",
    description: "",
    repository: "https://github.com/michaelkolesidis/perlin-landscape",
    deployment: "https://perlin-landscape.netlify.app/",
    video: "",
    visible: true,
  },

  {
    name: "Particircle",
    image: "../../images/particircle.gif",
    technologies: "p5.js, JavaScript",
    summary: "A circle of particles.",
    description: "",
    repository: "https://github.com/michaelkolesidis/particircle",
    deployment: "https://particircle.netlify.app/",
    video: "",
    visible: true,
  },

  {
    name: "Sticky Notes",
    image: "../../images/sticky-notes-02.png",
    technologies: "TypeScript, CSS",
    summary:
      "Fill your screen with sticky notes of all colors. Notes are editable and saved on local storage.",
    description: "",
    repository: "https://github.com/michaelkolesidis/sticky-notes",
    deployment: "https://sticky-notes-ts.vercel.app/",
    video: "",
    visible: true,
  },

  {
    name: "Fractal Mountain",
    image: "../../images/fractal-mountain.gif",
    technologies: "p5.js, JavaScript",
    summary: "A single triangle transforms into a fraction of mountain.",
    description: "",
    repository: "https://github.com/michaelkolesidis/fractal-mountain",
    deployment: "https://fractal-mountain.netlify.app/",
    video: "",
    visible: true,
  },

  {
    name: "Tenzi",
    image: "../../images/tenzi.gif",
    technologies: "React, TypeScript, Sass",
    summary:
      "A dice game at which players needs to roll dice until they get them all on the same number.",
    description: "",
    repository: "https://github.com/michaelkolesidis/tenzi",
    deployment: "https://tenzi-react.netlify.app/",
    video: "",
    visible: true,
  },

  {
    name: "Pong",
    image: "../../images/pong.gif",
    technologies: "Processing, Java",
    summary: "The classic Pong game recreated from scratch.",
    description: "",
    repository: "https://github.com/michaelkolesidis/pong-processing",
    deployment: "https://github.com/michaelkolesidis/pong-processing",
    video: "",
    visible: true,
  },

  {
    name: "Camel Notes",
    image: "../../images/camelnotes.gif",
    technologies: "React, JavaScript",
    summary: "A simple note-taking web application in React",
    description: "",
    repository: "https://github.com/michaelkolesidis/camelnotes",
    deployment: "https://github.com/michaelkolesidis/camelnotes",
    video: "",
    visible: true,
  },

  {
    name: "interwoven over.",
    image: "../../images/circle-random-lines.gif",
    technologies: "p5.js, JavaScript",
    summary: "A circle created dynamically by random lines",
    description: "",
    repository: "https://github.com/michaelkolesidis/interwoven-oversemantization",
    deployment: "https://interwoven-oversemantization.netlify.app/",
    video: "",
    visible: true,
  },

  {
    name: "Music Reviews",
    image: "../../images/music-reviews.png?v=2",
    technologies: "TypeScript, CSS",
    summary: "A basic music reviews web app prototype.",
    description: "",
    repository: "https://github.com/michaelkolesidis/music-reviews",
    deployment: "https://music-reviews.netlify.app/",
    video: "",
    visible: true,
  },

  {
    name: "Landmarks",
    image: "../../images/landmarks.png?v=2",
    technologies: "React, TypeScript",
    summary: "A React static page showing landmarks around the globe.",
    description: "",
    repository: "https://github.com/michaelkolesidis/react-landmarks",
    deployment: "https://react-landmarks.netlify.app/",
    video: "",
    visible: true,
  },

  {
    name: "CSS 3D",
    image: "../../images/css-3d.png?v=2",
    technologies: "CSS",
    summary: "A simple website showcasing CSS 3D examples and how they work.",
    description: "",
    repository: "https://github.com/michaelkolesidis/css-3d",
    deployment: "https://css-3d.netlify.app/",
    video: "",
    visible: true,
  },

  {
    name: "Sports App",
    image: "../../images/sport-app-pwa.png?v=2",
    technologies: "JavaScript, CSS",
    summary:
      "A progressive web application enabling users to create custom tables.",
    description: "",
    repository: "https://github.com/michaelkolesidis/sports-app-pwa",
    deployment: "https://sports-app-pwa.netlify.app/",
    video: "",
    visible: true,
  },

  {
    name: "Scribble Text",
    image: "../../images/scribble-text.gif?v=2",
    technologies: "p5.js, JavaScript",
    summary: "Text gradually appears while scribbling.",
    description: "",
    repository: "https://github.com/michaelkolesidis/scribble-text",
    deployment: "https://scribble-text.netlify.app/",
    video: "",
    visible: true,
  },

  {
    name: "Intersecting Circles",
    image: "../../images/intersecting-circles.gif",
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
    image: "../../images/random-triangles-cube.gif",
    technologies: "Three.js, JavaScript",
    summary: "Random triangles form a cube.",
    description: "",
    repository: "https://github.com/michaelkolesidis/random-triangles-cube",
    deployment: "https://random-triangles-cube.netlify.app/",
    video: "",
    visible: true,
  },

  {
    name: "Move Square",
    image: "../../images/move-square.gif",
    technologies: "TypeScript, SVG, CSS",
    summary: "A simple SVG example featuring a movable square.",
    description: "",
    repository: "https://github.com/michaelkolesidis/move-square",
    deployment: "https://move-square.netlify.app/",
    video: "",
    visible: true,
  },

  {
    name: "Japanese Restaurant",
    image: "../../images/japanese-restaurant.png?v=2",
    technologies: "JavaScript, Sass, Webpack, npm",
    summary:
      "A JavaScript single-page application (SPA) showcasing the use of ES6 modules as well as Webpack.",
    description: "",
    repository: "https://github.com/michaelkolesidis/japanese-restaurant",
    deployment: "http://michaelkolesidis.com/japanese-restaurant/",
    video: "",
    visible: false,
  },

  {
    name: "Electronic Drum Kit",
    image: "../../images/electronic-drum-kit.png?v=2",
    technologies: "JavaScript, CSS",
    summary: "An Electronic Drumkit that can be used with mouse or keyboard.",
    description: "",
    repository: "https://github.com/michaelkolesidis/electronic-drum-kit",
    deployment: "https://electronic-drumkit-js.netlify.app/",
    video: "",
    visible: false,
  },

  {
    name: "Tic-Tac-Toe",
    image: "../../images/tic-tac-toe.png?v=2",
    technologies: "JavaScript, CSS",
    summary:
      "The popular Tic-tac-toe game, implemented with vanilla JavaScript.",
    description: "",
    repository: "https://github.com/michaelkolesidis/tic-tac-toe",
    deployment: "https://tic-tac-toe-michael.netlify.app/",
    video: "",
    visible: false,
  },

  {
    name: "Olympics",
    image: "../../images/olympics.png?v=2",
    technologies: "CSS",
    summary:
      "An animation-abundant responsive website showing Olympics results.",
    description: "",
    repository: "https://github.com/michaelkolesidis/project-olympics",
    deployment: "https://project-olympics.netlify.app/",
    video: "",
    visible: false,
  },
];

export default projectList;

// EMPTY PROJECT TEMPLATE

// {
//   name: "",
//   image: "../../images/",
//   technologies: "",
//   summary: "",
//   description: "",
//   repository: "",
//   deployment: "",
//   video: "",
//   visible: true,
// },
