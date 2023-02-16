// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

export default function header() {
  const header = document.getElementById("header");

  if (header != null) {
    // Name
    const name = document.createElement("h1");
    name.setAttribute("id", "name");
    name.innerHTML = `MICHAEL K<span id="title-letter">O</span>LESIDIS`;
    header.appendChild(name);

    // Top gap
    const topGap = document.createElement("div");
    topGap.setAttribute("id", "top-gap");
    topGap.innerText = `.`;
    header.appendChild(topGap);

    /* Styling */
    topGap.style.color = `white`;
  }
}
