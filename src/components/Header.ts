// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

export default function header() {
  const header = document.getElementById("header");

  if (header != null) {
    // Name
    let name = document.createElement("h1");
    name.setAttribute("id", "name");
    name.innerHTML = `MICHAEL K<span id="title-letter">O</span>LESIDIS`;

    // let nameLink = document.createElement("a");
    // nameLink.innerHTML = `MICHAEL K<span id="title-letter">O</span>LESIDIS`;
    // nameLink.title = "Michael Kolesidis";
    // nameLink.href = "https://michaelkolesidis.com";
    // name.appendChild(nameLink);

    header.appendChild(name);

    // Top gap
    let topGap = document.createElement("div");
    topGap.setAttribute("id", "top-gap");
    topGap.innerText = `.`;
    topGap.style.color = `white`;
    header.appendChild(topGap);

    // Menu button
    // let menuButton = document.createElement("h1");
    // menuButton.setAttribute("id", "menu-button");
    // menuButton.innerText = `.`;
    // menuButton.style.color = `white`;
    // header.appendChild(menuButton);
  }
}
