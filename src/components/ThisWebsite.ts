import { sentencesThisWebsite as sentences } from '../data/sentences.js';

export default function thisWebsite() {
  const website = document.getElementById('this-website');
  if (!website) return;

  // Title
  const websiteTitle = document.createElement('div');
  websiteTitle.classList.add('wavy');
  websiteTitle.innerHTML = [...'THIS WEBSITE']
    .map((char, i) => `<span style="--i:${12 - i}">${char}</span> `)
    .join('');
  website.appendChild(websiteTitle);

  // Populate sentences
  sentences.forEach((text, index) => {
    const sentence = document.createElement('p');
    if (index === 0) sentence.style.marginRight = 'auto';
    sentence.innerHTML = text;
    website.appendChild(sentence);
  });
}
