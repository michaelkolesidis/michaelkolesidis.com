let projectList = [
  {
    name: "JavaScript Software Synthesizer",
    image:
      "https://raw.githubusercontent.com/michaelkolesidis/javascript-software-synthesizer/main/screenshots/v.0.5.4-large.png",
    technologies: "Tone.js, WEBMIDI.js, JavaScript, Sass, npm",
    summary:
      "My flagship project. A powerful synthesizer build with web technologies.",
    description: `The JavaScript Software Synthesizer is a web application
                  enabling users to make and play music in the browser. It is
                  a software synthesizer utilizing the Web Audio API by
                  implementing a variety of JavaScript libraries.`,
    repository:
      "https://github.com/michaelkolesidis/javascript-software-synthesizer",
    deployment: "https://javascript-software-synthesizer.netlify.app/",
    video: "",
  },
  {
    name: "Minesweeper Emoji",
    image:
      "https://raw.githubusercontent.com/michaelkolesidis/minesweeper-emoji/main/screenshots/minesweeper-emoji.gif",
    technologies: "p5.js, JavaScript, CSS",
    summary: "The classic game reimagined and implemented with emojis.",
    description: `The classic Minesweeper game reimagined and implemented with emojis. 
                  It is an example of object-based JavaScript, each Cell is an instance 
                  of the class Cell. Mines are allocated randomly on page load.`,
    repository: "https://github.com/michaelkolesidis/minesweeper-emoji",
    deployment: "https://minesweeper-emoji.netlify.app/",
    video: "",
  },
  {
    name: "Perlin Landscape",
    image:
      "https://github.com/michaelkolesidis/perlin-landscape/blob/main/assets/perlin-landscape.gif?raw=true",
    technologies: "p5.js, JavaScript",
    summary: "Landscape created dynamically using Perlin noise.",
    description: "",
    repository: "https://github.com/michaelkolesidis/perlin-landscape",
    deployment: "https://perlin-landscape.netlify.app/",
    video: "",
  },
  {
    name: "Japanese Restaurant",
    image:
      "https://raw.githubusercontent.com/michaelkolesidis/japanese-restaurant/master/japanese-restaurant-screenshot.png",
    technologies: "JavaScript, Sass, Webpack, npm",
    summary:
      "A JavaScript single-page application (SPA) showcasing the use of ES6 modules as well as Webpack.",
    description: "",
    repository: "https://github.com/michaelkolesidis/japanese-restaurant",
    deployment: "http://michaelkolesidis.com/japanese-restaurant/",
    video: "",
  },
  {
    name: "Music Reviews",
    image:
      "https://raw.githubusercontent.com/michaelkolesidis/music-reviews/main/images/screenshot.png",
    technologies: "TypeScript, npm",
    summary:
      "A (basic) music reviews web app made with and demonstrating the use of TypeScript.",
    description: "",
    repository: "https://github.com/michaelkolesidis/music-reviews",
    deployment: "https://music-reviews.netlify.app/",
    video: "",
  },
  {
    name: "3D Cube",
    image:
      "https://raw.githubusercontent.com/michaelkolesidis/3d-cube/main/screenshots/demo-01.gif",
    technologies: "p5.js, JavaScript",
    summary: "A 3D cube rotating according to mouse movement.",
    description: "",
    repository: "https://github.com/michaelkolesidis/3d-cube",
    deployment: "https://3d-cubejs.netlify.app/",
    video: "",
  },
  {
    name: "Landmarks",
    image:
      "https://raw.githubusercontent.com/michaelkolesidis/react-landmarks/main/images/screenshot.png",
    technologies: "React, JavaScript, Webpack, npm",
    summary: "A React web application showing landmarks around the globe.",
    description: "",
    repository: "https://github.com/michaelkolesidis/react-landmarks",
    deployment: "https://react-landmarks.netlify.app/",
    video: "",
  },
  {
    name: "Sports App",
    image:
      "https://raw.githubusercontent.com/michaelkolesidis/sports-app-pwa/main/sport-app-pwa-screenshot.png",
    technologies: "JavaScript",
    summary:
      "Sports App is a progressive web application enabling the user to create custom tables.",
    description: "",
    repository: "https://github.com/michaelkolesidis/sports-app-pwa",
    deployment: "https://sports-app-pwa.netlify.app/",
    video: "",
  },
  {
    name: "3D Teddy Bear",
    image:
      "https://github.com/michaelkolesidis/3d-teddy-bear/raw/main/assets/teddy-02.gif",
    technologies: "p5.js, JavaScript",
    summary: "A rotating 3D Teddy Bear animation",
    description: "",
    repository: "https://github.com/michaelkolesidis/3d-teddy-bear",
    deployment: "https://3d-teddy-bear.netlify.app/",
    video: "",
  },
  {
    name: "Electronic Drum Kit",
    image:
      "https://raw.githubusercontent.com/michaelkolesidis/electronic-drum-kit/main/screenshot-01.png",
    technologies: "",
    summary: "An Electronic Drumkit that can be used with mouse or keyboard.",
    description: "",
    repository: "https://github.com/michaelkolesidis/electronic-drum-kit",
    deployment: "https://electronic-drumkit-js.netlify.app/",
    video: "",
  },
  {
    name: "Pong",
    image:
      "https://raw.githubusercontent.com/michaelkolesidis/pong-processing/main/pong.gif",
    technologies: "",
    summary: "The classic Pong game recreated from scratch.",
    description: "",
    repository: "https://github.com/michaelkolesidis/pong-processing",
    deployment: "https://tic-tac-toe-michael.netlify.app/",
    video: "",
  },
  {
    name: "Tic-Tac-Toe",
    image:
      "https://raw.githubusercontent.com/michaelkolesidis/tic-tac-toe/main/tic-tac-toe-screenshot.png",
    technologies: "JavaScript",
    summary:
      "The popular Tic-tac-toe game, implemented with vanilla JavaScript.",
    description: "",
    repository: "https://github.com/michaelkolesidis/tic-tac-toe",
    deployment: "https://tic-tac-toe-michael.netlify.app/",
    video: "",
  },
  {
    name: "Circle Random Lines",
    image:
      "https://raw.githubusercontent.com/michaelkolesidis/circle-random-lines/main/screenshots/demo.gif",
    technologies: "p5.js, JavaScript",
    summary: "A circle created dynamically by random lines",
    description: "",
    repository: "https://github.com/michaelkolesidis/circle-random-lines",
    deployment: "https://circle-random-lines.netlify.app/",
    video: "",
  },
  {
    name: "Olympics",
    image:
      "https://raw.githubusercontent.com/michaelkolesidis/project-olympics/main/screenshots/desktop-01.png",
    technologies: "CSS",
    summary:
      "An animation-abundant responsive website showing Olympics results.",
    description: "",
    repository: "https://github.com/michaelkolesidis/project-olympics",
    deployment: "https://project-olympics.netlify.app/",
    video: "",
  },
  {
    name: "CSS 3D",
    image:
      "https://raw.githubusercontent.com/michaelkolesidis/css-3d/main/screenshot-02.png",
    technologies: "CSS",
    summary: "A simple website showcasing CSS 3D examples and how they work.",
    description: "",
    repository: "https://github.com/michaelkolesidis/css-3d",
    deployment: "https://css-3d.netlify.app/",
    video: "",
  },
  {
    name: "Move Square",
    image:
      "https://github.com/michaelkolesidis/move-square/blob/main/move-square.gif?raw=true",
    technologies: "SVG, JavaScript",
    summary: "A simple SVG example featuring a movable square.",
    description: "",
    repository: "https://github.com/michaelkolesidis/move-square",
    deployment: "https://move-square.netlify.app/",
    video: "",
  },
];

export default projectList;

// EMPTY PROJECT
// {
//   name: "",
//   image: "",
//   technologies: "",
//   summary: "",
//   description: "",
//   repository: "",
//   deployment: "",
//   video: "",
// },
