// © 2022 Michael Kolesidis. All rights reserved.
// michael.kolesidis@gmail.com

export default function about() {
  const about = document.getElementById("about");

  let title = document.createElement("h1");
  title.innerText = `ABOUT ME`;
  about.appendChild(title);

  let sentences = [
    "Haven't you seen/read enough already?<br>No? OK, I'll tell you a bit more about me.",
    "I have lived, studied and worked in Greece (Thessaloniki), Spain (Barcelona) and the UK (Brighton).",
    "I speak Greek, English, Spanish, and a bit of (actually almost nothing nowadays) German.",
    "I love working with p5.js, JavaScript, React, and Sass.",
    "I want to improve my knowledge on three.js, WebGL, and Blender.",
    "I write almost all my code on VSCode.",
    "I use Linux (Ubuntu) as my daily drive, Windows 11 (for Adobe) and my good ol' MacBook when I'm not at home.",
    "I've been  to many countries.",
    "I don't drink coffee or tea.",
    "I'm not a big fan of Java. (there, I said it)",
    'I\'ve written this "About Me" section while procrastinating.',
    "Time to get back to work...",
  ];

  for (let i = 0; i < sentences.length; i++) {
    let sentence = document.createElement("p");
    sentence.innerText = `${sentences[i]}`;
    about.appendChild(sentence);
  }
}
