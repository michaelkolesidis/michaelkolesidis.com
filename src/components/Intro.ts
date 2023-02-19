// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

export default function intro() {
  const intro = document.getElementById("intro");

  if (intro != null) {
    // Who Am I (paragraph on the left)
    const whoami = document.createElement("p");
    whoami.setAttribute("id", "left");
    whoami.innerHTML = `I'm Michael Kolesidis.(as you might have already guessed from the huge heading)`;
    intro.appendChild(whoami);

    // Handwriting
    const handwriting = document.createElement("div");
    handwriting.setAttribute("id", "handwriting");
    handwriting.innerHTML = `⤺ I use it for bebugging`;
    intro.appendChild(handwriting);

    // What Am I (paragraph on the right)
    const whatami = document.createElement("p");
    whatami.setAttribute("id", "right");
    whatami.innerHTML = `I am a Front-End Engineer / New Media Artist with a diverse background in computer science, economics and the arts. I enjoy being creative and inquisitive, learning and building new things every day.<br>I am passionate about crafting innovative, immersive and engaging experiences, playing my tiny little part in shaping the future of the web.`;
    intro.appendChild(whatami);
  }
}
