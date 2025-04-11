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

import { generateNewColor } from '../../utils/functions.js';
import { colors } from '../../data/colors.js';
import { textsAbout as texts } from '../../data/texts.js';

export default function about() {
  const about = document.getElementById('about');
  if (!about) return;

  // Title creation with animation
  const aboutTitle = document.createElement('div');
  aboutTitle.classList.add('wavy');
  aboutTitle.innerHTML = [...'ABOUT']
    .map((letter, i) => `<span style="--i:${i + 1}">${letter}</span> `)
    .join('');
  about.appendChild(aboutTitle);

  let leftMargin = 0;
  let colorIndex = 0;

  texts.forEach((sentenceText, i) => {
    const sentence = document.createElement('p');
    sentence.classList.add('sentence');
    sentence.innerHTML = sentenceText;
    about.appendChild(sentence);

    // Random angle for rotation
    const angle = parseFloat((Math.random() * 10 - 5).toFixed(2));
    const color = colors[colorIndex % colors.length]!.rgb;
    sentence.style.backgroundColor = `rgb(${color})`;

    // Styling logic
    leftMargin =
      i < 6
        ? leftMargin + window.innerWidth * 0.024 * i
        : Math.max(leftMargin - window.innerWidth * 0.024 * i, 0);

    sentence.style.marginLeft =
      window.innerWidth > 1500 ? `${leftMargin}px` : '5px';
    sentence.style.transform = `rotate(${angle}deg)`;

    // Click event to change background color
    sentence.addEventListener('click', () => {
      sentence.style.backgroundColor = `rgb(${
        generateNewColor(colors, sentence, 'backgroundColor').rgb
      })`;
    });

    colorIndex += 1;
  });
}
