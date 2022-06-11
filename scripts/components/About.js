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
    "The first programming language I ever \"tampered with\" was Pascal, and the first language I ever learnt was C.",
    "C remains one of my favourite languages, even though I hardly ever use it knowadays.",
    "I write almost all my code on VSCode.",
    "I use Linux (Ubuntu) as my daily drive, Windows 11 (for Adobe) and my good ol' MacBook when I'm not at home.",
    "I've been  to many countries.",
    "I don't drink coffee or tea.",
    "I enjoy all board sports.",
    "The sport I'm best at is probably snowboarding.",
    "I hope that's enough for now!",
  ];

  for (let i = 0; i < sentences.length; i++) {
    let sentence = document.createElement("p");
    sentence.innerText = `${sentences[i]}`;
    about.appendChild(sentence);
  }
}
