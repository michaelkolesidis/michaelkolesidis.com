// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

export default function intro() {
  const intro = document.getElementById("intro");

  if (intro != null) {
    let whoami = document.createElement("p");
    whoami.innerText = `I'm Michael Kolesidis.(as you might have already guessed from the huge heading)`;
    intro.appendChild(whoami);

    let whatami = document.createElement("p");
    whatami.setAttribute("id", "right");

    whatami.innerText = `I am a Front-End Engineer / Creative Developer with a diverse background in computer science, economics and the arts. I enjoy being creative and inquisitive, learning and building new things every day. I am passionate about crafting innovative, immersive and engaging experiences, playing my tiny little part in shaping the future of the web.`;
    intro!.appendChild(whatami);
  }
}
