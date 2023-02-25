// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import { WindowManager, dragElement }  from "../utils/windowManager.js";

let windowManager = new WindowManager();

export default function header() {
  const header = document.getElementById("header");

  if (header != null) {
    // Name
    const name = document.createElement("h1");
    name.setAttribute("id", "name");
    name.innerHTML = /* html */ `MICHAEL K<span id="title-letter">O</span>LESIDIS`;
    header.appendChild(name);

    // Top gap
    const topGap = document.createElement("div");
    topGap.setAttribute("id", "top-gap");
    topGap.innerText = `.`;
    header.appendChild(topGap);

    /* Styling */
    topGap.style.color = `white`;

    // Message Box
    const messageBox = document.createElement("div");
    messageBox.setAttribute("id", "box");

    const content = document.createElement("div");
    content.classList.add("content");
    content.innerHTML = /* html */ `
        <p>DESIGN AWARD</p>
        <p>One Page Love</p>
        <p>February 2023</p>`;
    messageBox.appendChild(content);

    dragElement(messageBox);
    messageBox.style.zIndex = windowManager.base;
    messageBox.addEventListener("mousedown", () => {
      messageBox.style.zIndex = windowManager.moveOnTop();
    });

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.textContent = "✕";
    removeButton.addEventListener("click", () => {
      messageBox.style.opacity = "0";
      header.removeChild(messageBox);
    });
    messageBox.appendChild(removeButton);
    header.appendChild(messageBox);

    // Sticker
    const sticker = document.createElement("div");
    sticker.setAttribute("id", "new");
    sticker.innerHTML = `<img alt="New! sticker" width="150px" src="../../assets/new.svg" />`;
    header.appendChild(sticker);

    dragElement(sticker);
    sticker.style.zIndex = windowManager.base;

    sticker.addEventListener("mousedown", () => {
      sticker.style.zIndex = windowManager.moveOnTop();
    });
  }
}
