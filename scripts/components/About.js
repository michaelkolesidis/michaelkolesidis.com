// © 2022 Michael Kolesidis. All rights reserved.
// michael.kolesidis@gmail.com

export default function about() {
  const about = document.getElementById("about");

  // Title
  let aboutTitle = document.createElement("div");
  aboutTitle.classList.add("wavy");
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
    "Haven't you seen/read enough already? No? OK, I'll tell you a bit more about me.",
    "I have lived, studied and worked in Greece (Thessaloniki), Spain (Barcelona) and the UK (Brighton).",
    "I speak Greek, English, Spanish, and a bit of (actually hardly any nowadays) German.",
    "I love working with React and Sass.",
    'The first programming language I ever "tampered with" was Pascal, and the first language I ever learnt was C.',
    "C remains one of my favourite languages, even though I hardly ever use it knowadays.",
    "I write almost all my code on VSCode. In the past, I've used Sublime, CLion, IntelliJ IDEA and (unfortunately) Eclipse.",
    "I use Linux (Ubuntu) as my daily drive, Windows 11 (for Adobe, OK, who am I kidding for games mostly) and my good (very) ol' MacBook when I'm not at home.",
    "I have a penguin figurine on my desk.",
    "One day I will add a blog about programming to my web page. It will abundant in interesting stories and classy humor.",
    "I've been  to many countries.",
    "I don't drink coffee or tea.",
    "When programming, sometimes I feel like a mighty sorcerer and sometimes like a sorcerer's apprentice.",
    "I would like to learn a Lisp at some point. Should I go with Clojure, Common Lisp, or Scheme? Drop me a line if you can help me decide!",
    "The sport I'm best at is (probably) snowboarding.",
    "Appart from my huge respect for legends like Dennis Ritchie, Ken Thompson, and Richard Stallman, I really admire programmers maintaining little, less known projects, used by millions, all by themselves",
    "I hope that's enough for now!",
    "\n",
    "P.S. Feel free to contact me if you encounter any bugs and/or typos in my web page. Any help is much appreciated!",
    "P.P.S. The source code of my web page is released under the GNU General Public License v3.0, so feel free to study it, use it, edit it and redistribute it, in accordance with the licence's terms and conditions. If your are planning to use it for your own web page, changing the name in the title would be a good start.",
    "\n",
  ];

  for (let i = 0; i < sentences.length; i++) {
    let sentence = document.createElement("p");
    sentence.innerText = `${sentences[i]}`;
    about.appendChild(sentence);
  }
}
