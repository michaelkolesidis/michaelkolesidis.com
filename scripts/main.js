/*
 * Copyright (c) 2022 Michael Kolesidis
 * GNU General Public License v3.0
 */

"use strict";

let root = document.getElementById("root");

root.innerHTML = /*html*/ `
<h1 id="title">MICHAEL KOLESIDIS</h1>
<h2 id="subtitle">FRONT-END WEB DEVELOPER</h2>
<br>
<p>Hello, world!</p>
<p>My personal homepage is currently under maintainance.<br>An updated version is coming soon. Stay tuned :-)</p>
<div id="p5_loading" class="loadingclass">LOADING</div>
<div id="sketch"></div>
<p class="shadow">You can contact me at michael.kolesidis(at)gmail.com</p>
<br>
<h2 class="shadow">Projects*</h2>
<a href="https://javascript-software-synthesizer.netlify.app/" target="_blank">JavaScript Software Synthesizer | Tone.js</a><br>
<a href="https://minesweeper-emoji.netlify.app/" target="_blank" rel="noopener noreferrer">Minesweeper Emoji | p5.js</a><br>
<a href="https://react-landmarks.netlify.app/" target="_blank" rel="noopener noreferrer">Landmarks | React</a><br>
<a href="https://michaelkolesidis.github.io/japanese-restaurant/" target="_blank" rel="noopener noreferrer">Japanese Restaurant | ES6 Modules</a><br>
<a href="https://music-reviews.netlify.app/" target="_blank" rel="noopener noreferrer">Music Reviews | TypeScript</a><br>
<a href="https://3d-cubejs.netlify.app/" target="_blank" rel="noopener noreferrer">3D Cube | p5.js</a><br>
<a href="https://3d-teddy-bear.netlify.app/" target="_blank" rel="noopener noreferrer">3D Teddy Bear | p5.js</a><br>
<a href="https://sports-app-pwa.netlify.app/" target="_blank" rel="noopener noreferrer">Sports App | Progressive Web App</a><br>
<a href="https://electronic-drumkit-js.netlify.app/" target="_blank" rel="noopener noreferrer">Electronic Drum Kit | JavaScript</a><br>
<a href="https://tic-tac-toe-michael.netlify.app/" target="_blank" rel="noopener noreferrer">Tic-Tac-Toe | JavaScript</a><br>
<a href="https://circle-random-lines.netlify.app/" target="_blank" rel="noopener noreferrer">Circle Random Lines | p5.js</a><br>
<a href="https://project-olympics.netlify.app/" target="_blank" rel="noopener noreferrer">Olympics™ | CSS</a><br>
<a href="https://css-3d.netlify.app/" target="_blank" rel="noopener noreferrer">CSS 3D | CSS</a><br>
<a href="https://move-square.netlify.app/" target="_blank" rel="noopener noreferrer">Move Square | SVG</a><br>
<a href="https://github.com/michaelkolesidis/pong-processing" target="_blank" rel="noopener noreferrer">Pong | Processing (Java)</a><br>

<br>
<br>

<h2>Links</h2>
<a href="./assets/michael-kolesidis-cv-v2.pdf" target="_blank">CV</a><br>
<a href="https://github.com/michaelkolesidis" target="_blank">GitHub</a><br>
<a href="https://www.linkedin.com/in/michaelkolesidis/" target="_blank">Linkedin</a>

<br>
<br>
<br>
<br>
<br>


<p id="footnote">*Most projects include a link to their GitHub repository. All projects have informative readme files.You can find all relevant information about eact project there.</p>
`;

export let darkMode = false;