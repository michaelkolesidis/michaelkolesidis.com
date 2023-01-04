// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

export default function about() {
  const about = document.getElementById(`about`);

  if (about != null) {
    // Title
    let aboutTitle = document.createElement(`div`);
    aboutTitle.classList.add(`wavy`);
    aboutTitle.innerHTML = `   
      <span style="--i:1">A</span>
      <span style="--i:2">B</span>
      <span style="--i:3">O</span>
      <span style="--i:4">U</span>
      <span style="--i:5">T</span>
      <span style="--i:6">&nbsp;</span>
      <span style="--i:7">M</span>
      <span style="--i:8">E</span>`;
    about.appendChild(aboutTitle);

    // Sentences
    let sentences = [
      `\n`,
      `I have lived, studied and worked in Greece (Thessaloniki), Spain (Barcelona) and the UK (Brighton).`,
      `I speak Greek, English, Spanish, and a bit of (actually hardly any nowadays) German.`,
      'The first programming language I ever tampered with was Pascal, and the first language I ever learnt was C.',
      `C remains one of my favorite languages, even though I hardly ever use it nowadays.`,
      `I write almost all my code on VSCode. In the past, I've used Sublime, CLion, IntelliJ IDEA and (unfortunately) Eclipse.`,
      `I use Linux (Ubuntu) as my daily drive, Windows 11 (for Adobe and 3D software) and my good ol' MacBook when I'm not at home.`,
      `I have a small penguin figurine on my desk.`,
      `I've been  to many countries meeting people and discovering cultures from all over the world.`,
      `I don't drink coffee or tea.`,
      `When programming, sometimes I feel like a mighty sorcerer and sometimes like a sorcerer's apprentice.`,
      `My next goals are to master GLSL and Blender.`,
      `Apart from my huge respect for legends like Dennis Ritchie, Ken Thompson, and Richard Stallman, I really admire programmers maintaining little, less known projects, used by millions, all by themselves.`,
      `The sport I'm best at is (probably) snowboarding.`,
      `\n`,
      `\n`,
      `\n`,
      `\n`,
      `\n`,
      `P.S. The source code of my web page is released under the GNU Affero General Public License v3.0, so feel free to study it, use it, edit it and redistribute it, in accordance with the license's terms and conditions. If your are planning to use it for your own web page, changing the name in the title would be a good start.`,
      `\n`,
    ];

    for (let i = 0; i < sentences.length; i++) {
      let sentence = document.createElement(`p`);
      sentence.innerText = `${sentences[i]}`;
      about.appendChild(sentence);
    }
  }
}
