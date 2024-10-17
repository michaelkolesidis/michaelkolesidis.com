import { generateNewColor } from '../utils/functions.js';
import { colors } from '../data/colors.js';
import { sentencesAbout as sentences } from '../data/sentences.js';

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

    /* Styling */
    let leftMargin = 0;
    let colorIndex = 0;

    // Populate
    for (let i = 0; i < sentences.length; i++) {
      const sentence = document.createElement(`p`);
      sentence.classList.add('sentence');
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

      sentence.addEventListener('click', () => {
        sentence.style.backgroundColor = `rgb(${
          generateNewColor(colors, sentence, 'backgroundColor').rgb
        })`;
      });
    }
  }
}
