import { sentencesThisWebsite as sentences } from '../data/sentences.js';

export default function thisWebsite() {
  const website = document.getElementById(`this-website`);

  if (website != null) {
    // Title
    const websiteTitle = document.createElement(`div`);
    websiteTitle.classList.add(`wavy`);
    websiteTitle.innerHTML = `   
        <span style="--i:12">T</span>
        <span style="--i:11">H</span>
        <span style="--i:10">I</span>
        <span style="--i:9">S</span>
        <span style="--i:8">&nbsp;</span>
        <span style="--i:7">W</span>
        <span style="--i:6">E</span>
        <span style="--i:5">B</span>
        <span style="--i:4">S</span>
        <span style="--i:3">I</span>
        <span style="--i:2">T</span>
        <span style="--i:1">E</span>
        
        `;
    website.appendChild(websiteTitle);

    // Populate
    for (let i = 0; i < sentences.length; i++) {
      const sentence = document.createElement(`p`);

      i === 0 ? (sentence.style.marginRight = `auto`) : '';

      sentence.innerHTML = `${sentences[i]}`;
      website.appendChild(sentence);
    }
  }
}
