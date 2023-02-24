// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import { generateNewColor } from "../utils/functions.js";
import { colors } from "../utils/colors.js";

export default function about() {
  const about = document.getElementById(`about`);

  if (about != null) {
    // Title
    const aboutTitle = document.createElement(`div`);
    aboutTitle.classList.add(`wavy`);
    aboutTitle.innerHTML = /* html */ `   
      <span style="--i:5">A</span>
      <span style="--i:4">B</span>
      <span style="--i:3">O</span>
      <span style="--i:2">U</span>
      <span style="--i:1">T</span>`;
    about.appendChild(aboutTitle);

    // Sentences
    const sentences = [
      `<strong>The official [artist] bio ↴ ↴ ↴</strong>`,

      `I am a multidisciplinary new media artist, with a background in creative development, performance art and computer science. I work at the intersection of performativity and digitality, attempting to blend art with technology with varying degrees of success. Nowadays, I explore graphics programming and a multitude of new media technologies to create web art, audiovisual art and physical installations. I have presented my work in Greece and the UK.`,

      `<strong>More ↴ ↴ ↴</strong>`,

      `I have lived, studied and worked in Greece, Spain (Barcelona) and the UK (Brighton).`,

      `I speak Greek, English, Spanish, and a bit of (actually hardly any nowadays) German.`,

      "The first programming language I ever tampered with was Pascal, and the first I ever learnt was C.",

      `Today, I mostly use three.js, OpenGL Shading Language, WebGL, JavaScript, React, TypeScript, and Blender.`,

      `I always keep a rubber duck on my desk.`,

      `I don't drink coffee or tea. (OK, I might drink tea a few times a year)`,
    ];

    /* Styling */
    let leftMargin = 0;
    let colorIndex = 0;

    // Populate
    for (let i = 0; i < sentences.length; i++) {
      const sentence = document.createElement(`p`);
      sentence.classList.add("sentence");
      sentence.innerHTML = `${sentences[i]}`;

      about.appendChild(sentence);

      /* Styling */
      let angle = 0;
      while (angle === 0) {
        angle = Math.random() * 6 - 3;
      }
      const color = colors[colorIndex % colors.length].rgb;
      sentence.style.backgroundColor = `rgb(${color})`;
      colorIndex += 1;
      if (i < 6) {
        leftMargin += window.innerWidth * 0.024 * i;
      } else {
        leftMargin -= window.innerWidth * 0.024 * i;
        if (leftMargin < 0) {
          leftMargin = 0;
        }
      }

      if (window.innerWidth > 1500) {
        sentence.style.marginLeft = `${leftMargin}px`;
      } else {
        sentence.style.marginLeft = `5px`;
      }
      sentence.style.transform = `rotate(${angle}deg)`;

      sentence.addEventListener("click", () => {
        sentence.style.backgroundColor = `rgb(${
          generateNewColor(colors, sentence, "backgroundColor").rgb
        })`;
      });
    }
  }
}
