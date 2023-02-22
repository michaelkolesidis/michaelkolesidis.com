// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

export default function intro() {
  const intro = document.getElementById("intro");

  if (intro != null) {
    // Who Am I (paragraph on the left)
    const whoami = document.createElement("p");
    whoami.setAttribute("id", "left");
    whoami.innerHTML = `I'm Michael Kolesidis.<br>(as you might have already guessed from the huge heading)`;
    intro.appendChild(whoami);

    // Handwriting
    const handwriting = document.createElement("div");
    handwriting.setAttribute("id", "handwriting");
    handwriting.innerHTML = /* html */ `<p>⤺ I use it for<br> 
    &nbsp;&nbsp;&nbsp;
    debugging</p>`;
    intro.appendChild(handwriting);
    handwriting.addEventListener("click", () => {
      window.open("https://en.wikipedia.org/wiki/Rubber_duck_debugging");
    });

    // What Am I (paragraph on the right)
    const whatami = document.createElement("p");
    whatami.setAttribute("id", "right");
    whatami.innerHTML = /* html */ `I am a Front-End Engineer / New Media Artist with a background in art and computer science, always passionate about crafting immersive and engaging experiences, playing my tiny little part in shaping the future of the web.`;
    intro.appendChild(whatami);
  }
}
