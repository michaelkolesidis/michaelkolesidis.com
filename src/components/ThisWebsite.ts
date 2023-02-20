// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

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

    // Sentences
    const sentences = [
      `(Finally a colourless section!)`,
      `This website was designed and coded by me from scratch, without the use of any front-end UI libraries or frameworks. The only library used is a graphics library named <a href="https://p5js.org" target="_blank">p5.js</a>, that helped me with the 3D rubber duck.`,

      `I was influenced by print publication design and by <a href="https://vimeo.com/694306367" target="_blank">90's MTV on-screen graphics.</a>`,

      `The source code is released under the <a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank" >GNU Affero General Public License v3.0</a>, so feel free to study it, use it, edit it and redistribute it, in accordance with the license's terms and conditions. You can find it on <a href="https://github.com/michaelkolesidis/michaelkolesidis.com" target="_blank">GitHub</a>. If your are planning to use it for your own web page, changing the name in the title would be a good start.`,
    ];

    // Populate
    for (let i = 0; i < sentences.length; i++) {
      const sentence = document.createElement(`p`);

      i === 0 ? (sentence.style.marginRight = `auto`) : "";

      sentence.innerHTML = `${sentences[i]}`;
      website.appendChild(sentence);
    }
  }
}
