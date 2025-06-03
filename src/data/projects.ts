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

export interface Project {
  name: string; // The name of the project
  image: string; // URL to the project's image
  technologies: string; // Technologies used in the project
  summary: string; // A brief summary of the project
  description: string; // A detailed description of the project
  repository: string; // Link to the project’s repository (GitHub)
  deployment: string; // Link to the project’s live deployment
  video: string; // Optional link to a video demonstration
  visible: boolean; // Whether the project is visible or not
}

export const projectList: Project[] = [
  {
    name: 'OKTO.DIRECT',
    image: '../../images/okto-direct.png',
    technologies:
      'React, Redux, MUI, Styled Components, WebSocket, Spring Boot',
    summary:
      'Member of the core team that conceptualized, designed, and developed OKTO.DIRECT, the first and only retail payments gateway that unlocks with one integration multiple digital payment methods for users to deposit and withdraw in real-time.',
    description: '',
    repository: '',
    deployment: 'https://www.oktopayments.com/okto-direct/',
    video: '',
    visible: true,
  },

  {
    name: 'JSS-01',
    image: '../../images/jss-01.png?v=2',
    technologies: 'Tone.js, WEBMIDI.js, TypeScript, JavaScript, Sass',
    summary: 'A powerful software synthesizer build with web technologies.',
    description: `The JavaScript Software Synthesizer is a web application
                  enabling users to make and play music in the browser. It is
                  a software synthesizer utilizing the Web Audio API by
                  implementing a variety of JavaScript libraries.`,
    repository:
      'https://github.com/michaelkolesidis/javascript-software-synthesizer',
    deployment: 'https://jss.michaelkolesidis.com/',
    video: '',
    visible: true,
  },

  {
    name: 'Uncanny Canyon',
    image: '../../images/uncanny-canyon.png',
    technologies: 'Three.js, GLSL, Howler.js, JavaScript',
    summary:
      'An interactive 3D web experience, featured in Athens Digital Arts Festival 2023 in the Web Art category.',
    description: ``,
    repository: 'https://github.com/michaelkolesidis/uncanny-canyon',
    deployment: 'https://online.adaf.gr/video/uncanny-canyon/',
    video: '',
    visible: true,
  },

  {
    name: 'Fintech World',
    image: '../../images/fintech_world.png',
    technologies: 'Three.js, React, React Three Fiber, Zustand',
    summary: `An immersive 3D gamification web platform that promotes, educates, and informs visitors about digital payment solutions, through a fun and engaging experience.`,
    description: '',
    repository: 'https://github.com/michaelkolesidis/fintech-world',
    deployment: 'https://fintechworld.michaelkolesidis.com/',
    video: '',
    visible: true,
  },

  {
    name: 'ZigZag',
    image: '../../images/zigzag.png',
    technologies: 'Three.js, React, React Three Fiber, Zustand',
    summary:
      'A 3D ZigZag game built with React Three Fiber. Stay on the wall and zigzag as far as you can! Just tap the screen to change the ball’s direction. One wrong move and you’re off the edge! How far can you make it?',
    description: '',
    repository: 'https://github.com/michaelkolesidis/zigzag',
    deployment: 'https://zigzag.michaelkolesidis.com/',
    video: '',
    visible: true,
  },

  {
    name: 'Emoji Minesweeper',
    image: '../../images/emoji-minesweeper.png?v=3',
    technologies: 'p5.js, JavaScript, CSS',
    summary:
      'Minesweeper made with emojis. The most fun way to play minesweeper!',
    description:
      'The game logic and anything that happens inside the board\n is written in p5.js. The board is drawn inside a canvas element,\n with the help of the p5.js library. The rest of the UI\n is written in vanilla JavaScript.',
    repository: 'https://github.com/michaelkolesidis/emoji-minesweeper',
    deployment: 'https://emojiminesweeper.com/',
    video: '',
    visible: true,
  },

  {
    name: 'Cherry Charm',
    image: '../../images/cherry-charm.png',
    technologies: 'Three.js, React, TypeScript, React Three Fiber, Zustand',
    summary: 'An online 3D slot machine game.',
    description: '',
    repository: 'https://github.com/michaelkolesidis/cherry-charm',
    deployment: 'https://cherrycharm.michaelkolesidis.com/',
    video: '',
    visible: true,
  },

  {
    name: 'Scratch Bonanza',
    image: '../../images/scratch-bonanza.gif',
    technologies: 'React, TypeScript, Zustand',
    summary: 'An online scratchcard game. Do you feel lucky?',
    description: '',
    repository: 'https://github.com/michaelkolesidis/scratch-bonanza',
    deployment: 'https://scratchbonanza.michaelkolesidis.com/',
    video: '',
    visible: true,
  },

  {
    name: 'Timberland 3D',
    image: '../../images/timberland-3d-customizer.png',
    technologies: 'Three.js, React, TypeScript, React Three Fiber, Zustand',
    summary: 'Customize and preview Timberland boots in 3D',
    description: '',
    repository: 'https://github.com/michaelkolesidis/timberland-3d-customizer',
    deployment: 'https://timberland.michaelkolesidis.com/',
    video: '',
    visible: true,
  },

  {
    name: 'Cube Rabbit',
    image: '../../images/cube-rabbit.png',
    technologies: 'Three.js, React, TypeScript, React Three Fiber, Zustand',
    summary: 'The story of a cube-shaped rabbit.',
    description: '',
    repository: 'https://github.com/michaelkolesidis/cuberabbit',
    deployment: 'https://cuberabbit.michaelkolesidis.com/',
    video: '',
    visible: true,
  },

  {
    name: 'Beachy Beachy Ball',
    image: '../../images/beachy-beachy-ball.png',
    technologies: 'Three.js, React, React Three Fiber, Rapier, Zustand',
    summary: 'A beach ball adventure! Can you make it to the end?',
    description: '',
    repository: 'https://github.com/michaelkolesidis/beachy-beachy-ball',
    deployment: 'https://beachybeachyball.michaelkolesidis.com/',
    video: '',
    visible: true,
  },

  {
    name: "Chompy O'Croc",
    image: '../../images/chompy-o-croc.png',
    technologies: 'Phaser, TypeScript ',
    summary:
      'Run and jump around platforms, collecting stars, chomping on delicious food, and avoiding bombs!',
    description: '',
    repository: 'https://github.com/michaelkolesidis/chompy-o-croc',
    deployment: 'https://chompyocroc.michaelkolesidis.com/',
    video: '',
    visible: true,
  },

  {
    name: 'synthétique',
    image: '../../images/synthetique.png',
    technologies: 'Three.js, JavaScript, CSS',
    summary: 'Retrofuturistic demo.',
    description: '',
    repository: 'https://github.com/michaelkolesidis/synthetique',
    deployment: 'https://synthetique.michaelkolesidis.com/',
    video: '',
    visible: true,
  },

  {
    name: 'Rock Paper 3D',
    image: '../../images/rock-paper-scissors-3d.png',
    technologies: 'Three.js, React, React Three Fiber, Zustand',
    summary: 'The classic game of rock, paper, scissors in 3D!',
    description: '',
    repository: 'https://github.com/michaelkolesidis/rock-paper-scissors-3d',
    deployment: 'https://rockpaperscissors3d.michaelkolesidis.com/',
    video: '',
    visible: true,
  },

  {
    name: 'Bird Generator',
    image: '../../images/bird-generator.png',
    technologies: 'p5.js, JavaScript, CSS',
    summary: 'A Bird Generator™ for the creation of all sorts of birds.',
    description: '',
    repository: 'https://github.com/michaelkolesidis/bird-generator',
    deployment: 'https://birdgenerator.michaelkolesidis.com/',
    video: '',
    visible: true,
  },

  {
    name: 'p5.js Experiments',
    image: '../../images/perlin-landscape.gif',
    technologies: 'p5.js, JavaScript',
    summary: 'A collection of p5.js visual experiments.',
    description: '',
    repository: 'https://github.com/michaelkolesidis/p5js-experiments',
    deployment: 'https://p5js.michaelkolesidis.com/',
    video: '',
    visible: true,
  },

  {
    name: 'The Zen of Hangman',
    image: '../../images/',
    technologies: 'JavaScript, CSS',
    summary: 'The Zen of Hangman: Minimal Hangman made with JavaScript.',
    description: '',
    repository: 'https://github.com/michaelkolesidis/the-zen-of-hangman',
    deployment: 'https://hangman.michaelkolesidis.com',
    video: '',
    visible: false,
  },

  {
    name: 'Div Surrogates',
    image: '../../images/div-surrogates.png',
    technologies: 'JavaScript, CSS, DOM Window Manager',
    summary:
      'A piece of web art that makes use of the DOM Window Manager, a tiny library created by me.',
    description: '',
    repository:
      'https://github.com/michaelkolesidis/collection-of-div-surrogates',
    deployment: 'https://collection-of-div-surrogates.vercel.app/',
    video: '',
    visible: false,
  },

  {
    name: 'Sticky Notes',
    image: '../../images/sticky-notes-02.png',
    technologies: 'TypeScript, CSS',
    summary:
      'Fill your screen with sticky notes of all colors. Notes are editable and saved on local storage.',
    description: '',
    repository: 'https://github.com/michaelkolesidis/sticky-notes',
    deployment: 'https://sticky-notes-ts.vercel.app/',
    video: '',
    visible: false,
  },

  {
    name: 'Tenzi',
    image: '../../images/tenzi.gif',
    technologies: 'React, TypeScript, Sass',
    summary:
      'A dice game at which players needs to roll dice until they get them all on the same number.',
    description: '',
    repository: 'https://github.com/michaelkolesidis/tenzi',
    deployment: 'https://tenzi-react.netlify.app/',
    video: '',
    visible: false,
  },

  {
    name: 'Camel Notes',
    image: '../../images/camelnotes.gif',
    technologies: 'React, JavaScript',
    summary: 'A simple note-taking web application in React',
    description: '',
    repository: 'https://github.com/michaelkolesidis/camelnotes',
    deployment: 'https://github.com/michaelkolesidis/camelnotes',
    video: '',
    visible: false,
  },

  {
    name: 'Perlin Landscape',
    image: '../../images/perlin-landscape.gif',
    technologies: 'p5.js, JavaScript',
    summary: 'Landscape created dynamically using Perlin noise.',
    description: '',
    repository: 'https://github.com/michaelkolesidis/perlin-landscape',
    deployment: 'https://perlin-landscape.vercel.app/',
    video: '',
    visible: false,
  },

  {
    name: 'Particircle',
    image: '../../images/particircle.gif',
    technologies: 'p5.js, JavaScript',
    summary: 'A circle of particles.',
    description: '',
    repository: 'https://github.com/michaelkolesidis/particircle',
    deployment: 'https://particircle.vercel.app/',
    video: '',
    visible: false,
  },

  {
    name: 'Fractal Mountain',
    image: '../../images/fractal-mountain.gif',
    technologies: 'p5.js, JavaScript',
    summary: 'A single triangle transforms into a fraction of mountain.',
    description: '',
    repository: 'https://github.com/michaelkolesidis/fractal-mountain',
    deployment: 'https://fractal-mountain.vercel.app/',
    video: '',
    visible: false,
  },

  {
    name: 'Interwoven Over.',
    image: '../../images/circle-random-lines.gif',
    technologies: 'p5.js, JavaScript',
    summary: 'A circle created dynamically by random lines',
    description: '',
    repository:
      'https://github.com/michaelkolesidis/interwoven-oversemantization',
    deployment: 'https://interwoven-oversemantization.vercel.app/',
    video: '',
    visible: false,
  },

  {
    name: 'Scribble Text',
    image: '../../images/scribble-text.gif?v=2',
    technologies: 'p5.js, JavaScript',
    summary: 'Text gradually appears while scribbling.',
    description: '',
    repository: 'https://github.com/michaelkolesidis/scribble-text',
    deployment: 'hhttps://scribble-text.vercel.app/',
    video: '',
    visible: false,
  },

  {
    name: 'CSS 3D',
    image: '../../images/css-3d.png?v=2',
    technologies: 'CSS',
    summary: 'A simple website showcasing CSS 3D examples and how they work.',
    description: '',
    repository: 'https://github.com/michaelkolesidis/css-3d',
    deployment: 'https://css-3d.netlify.app/',
    video: '',
    visible: false,
  },

  {
    name: 'Pong',
    image: '../../images/pong.gif',
    technologies: 'Processing, Java',
    summary: 'The classic Pong game recreated from scratch.',
    description: '',
    repository: 'https://github.com/michaelkolesidis/pong-processing',
    deployment: 'https://github.com/michaelkolesidis/pong-processing',
    video: '',
    visible: false,
  },

  {
    name: 'Random Triangles Cube',
    image: '../../images/random-triangles-cube.gif',
    technologies: 'Three.js, JavaScript',
    summary: 'Random triangles form a cube.',
    description: '',
    repository: 'https://github.com/michaelkolesidis/random-triangles-cube',
    deployment: 'https://random-triangles-cube.netlify.app/',
    video: '',
    visible: false,
  },

  {
    name: 'Intersecting Circles',
    image: '../../images/intersecting-circles.gif',
    technologies: 'p5.js, JavaScript',
    summary: 'Colorful explosions occur when two circles are intersecting.',
    description: '',
    repository: 'https://github.com/michaelkolesidis/intersecting-circles',
    deployment: 'https://intersecting-circles.netlify.app/',
    video: '',
    visible: false,
  },

  {
    name: 'Move Square',
    image: '../../images/move-square.gif',
    technologies: 'TypeScript, SVG, CSS',
    summary: 'A simple SVG example featuring a movable square.',
    description: '',
    repository: 'https://github.com/michaelkolesidis/move-square',
    deployment: 'https://move-square.netlify.app/',
    video: '',
    visible: false,
  },

  {
    name: 'Music Reviews',
    image: '../../images/music-reviews.png?v=2',
    technologies: 'TypeScript, CSS',
    summary: 'A basic music reviews web app prototype.',
    description: '',
    repository: 'https://github.com/michaelkolesidis/music-reviews',
    deployment: 'https://music-reviews.netlify.app/',
    video: '',
    visible: false,
  },

  {
    name: 'Sports App',
    image: '../../images/sport-app-pwa.png?v=2',
    technologies: 'JavaScript, CSS',
    summary:
      'A progressive web application enabling users to create custom tables.',
    description: '',
    repository: 'https://github.com/michaelkolesidis/sports-app-pwa',
    deployment: 'https://sports-app-pwa.netlify.app/',
    video: '',
    visible: false,
  },

  {
    name: 'Landmarks',
    image: '../../images/landmarks.png?v=2',
    technologies: 'React, TypeScript',
    summary: 'A React static page showing landmarks around the globe.',
    description: '',
    repository: 'https://github.com/michaelkolesidis/react-landmarks',
    deployment: 'https://react-landmarks.netlify.app/',
    video: '',
    visible: false,
  },

  {
    name: 'Japanese Restaurant',
    image: '../../images/japanese-restaurant.png?v=2',
    technologies: 'JavaScript, Sass, Webpack, npm',
    summary:
      'A JavaScript single-page application (SPA) showcasing the use of ES6 modules as well as Webpack.',
    description: '',
    repository: 'https://github.com/michaelkolesidis/japanese-restaurant',
    deployment: 'http://michaelkolesidis.com/japanese-restaurant/',
    video: '',
    visible: false,
  },

  {
    name: 'Electronic Drum Kit',
    image: '../../images/electronic-drum-kit.png?v=2',
    technologies: 'JavaScript, CSS',
    summary: 'An Electronic Drum Kit that can be used with mouse or keyboard.',
    description: '',
    repository: 'https://github.com/michaelkolesidis/electronic-drum-kit',
    deployment: 'https://electronic-drumkit-js.netlify.app/',
    video: '',
    visible: false,
  },

  {
    name: 'Tic-Tac-Toe',
    image: '../../images/tic-tac-toe.png?v=2',
    technologies: 'JavaScript, CSS',
    summary:
      'The popular Tic-tac-toe game, implemented with vanilla JavaScript.',
    description: '',
    repository: 'https://github.com/michaelkolesidis/tic-tac-toe',
    deployment: 'https://tic-tac-toe-michael.netlify.app/',
    video: '',
    visible: false,
  },

  {
    name: 'Olympics',
    image: '../../images/olympics.png?v=2',
    technologies: 'CSS',
    summary:
      'An animation-abundant responsive website showing Olympics results.',
    description: '',
    repository: 'https://github.com/michaelkolesidis/project-olympics',
    deployment: 'https://project-olympics.netlify.app/',
    video: '',
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
