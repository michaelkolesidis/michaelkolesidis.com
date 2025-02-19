import { generateNewColor } from '../utils/functions.js';
import { colors } from '../data/colors.js';
import { sentencesAbout as sentences } from '../data/sentences.js';

export default function about() {
  const about = document.getElementById('about');
  if (!about) return;

  // Title creation with animation
  const aboutTitle = document.createElement('div');
  aboutTitle.classList.add('wavy');
  aboutTitle.innerHTML = [...'ABOUT']
    .map((letter, i) => `<span style="--i:${5 - i}">${letter}</span> `)
    .join('');
  about.appendChild(aboutTitle);

  let leftMargin = 0;
  let colorIndex = 0;

  sentences.forEach((sentenceText, i) => {
    const sentence = document.createElement('p');
    sentence.classList.add('sentence');
    sentence.innerHTML = sentenceText;
    about.appendChild(sentence);

    // Random angle for rotation
    const angle = (Math.random() * 6 - 3).toFixed(2);
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
