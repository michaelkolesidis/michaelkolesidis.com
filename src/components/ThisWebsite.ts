// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

export default function thisWebsite() {
  const website = document.getElementById(`this-website`);

  if (website != null) {
    // Title
    let websiteTitle = document.createElement(`div`);
    websiteTitle.classList.add(`wavy`);
    websiteTitle.innerHTML = `   
        <span style="--i:1">T</span>
        <span style="--i:2">H</span>
        <span style="--i:3">I</span>
        <span style="--i:4">S</span>
        <span style="--i:5">&nbsp;</span>
        <span style="--i:6">W</span>
        <span style="--i:7">E</span>
        <span style="--i:8">B</span>
        <span style="--i:9">S</span>
        <span style="--i:10">I</span>
        <span style="--i:11">T</span>
        <span style="--i:12">E</span>
        
        `;
        website.appendChild(websiteTitle);

    // Sentences
    let sentences = [
      `(Finally a colourless section!)`,
      `This website was created and coded by me from scratch, without the use of any front-end UI libraries or frameworks. The only library used is a WebGL library named p5.js, that helped me with the 3D teddy bear at the top of the page.`,

      `I went for a billboardesque aesthetic, with some elements of printing publication design (fashion magazine covers etc.), plus a hint of a 90's TV / 90's MTV aesthetic. I like to think of it as an interactive billboard broadcasted on an old CRT television set. It's still work in progress and new features will be added on a regular basis.`,

      `The source code of this website is released under the <a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank" >GNU Affero General Public License v3.0</a>, so feel free to study it, use it, edit it and redistribute it, in accordance with the license's terms and conditions. You can find it on <a href="https://github.com/michaelkolesidis/michaelkolesidis.com" target="_blank">GitHub</a>. If your are planning to use it for your own web page, changing the name in the title would be a good start.`,

      `One of the initial sources of inspiration (or the original creation that I blatantly and unushamedly copied as others might say) was the beautiful and award-winning website of <a href="https://souldesign.gr/" target="_blank">SOUL Design</a>. ॐ`,
    ];

    for (let i = 0; i < sentences.length; i++) {
      let sentence = document.createElement(`p`);
      sentence.innerHTML = `${sentences[i]}`;
      website.appendChild(sentence);
    }
  }
}
