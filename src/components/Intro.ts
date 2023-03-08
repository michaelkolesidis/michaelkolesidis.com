// https://michaelkolesidis.com
// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import { WindowManager, dragElement } from "dom-window-manager";

let windowManager = new WindowManager();

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
    const handwritingText = document.createElement("p");
    handwritingText.innerHTML = /* html */ `⤺ I use it for<br> 
                                              &nbsp;&nbsp;&nbsp;
                                              debugging`;
    handwriting.appendChild(handwritingText);
    intro.appendChild(handwriting);
    handwritingText.addEventListener("click", () => {
      duckDebuggingModal.style.display = "block";
      duckDebuggingModal.style.pointerEvents = "all";
    });

    // Modal
    const duckDebuggingModal = document.createElement("div");
    duckDebuggingModal.setAttribute("id", "duck-modal");
    duckDebuggingModal.innerHTML = /* html */ `
    When programmers try to find and resolve bugs, 
    it helps to explain their code line-by-line to an inanimate object. 
    This technique is known as rubber duck debugging.<br>
    <a 
      target="_blank" 
      href="https://en.wikipedia.org/wiki/Rubber_duck_debugging"
    >
      LEARN MORE
    </a>`;
    handwriting.appendChild(duckDebuggingModal);

    // Modal X Button
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.textContent = "✕";
    removeButton.addEventListener("click", () => {
      handwritingText.style.pointerEvents = "none";
      handwriting.removeChild(duckDebuggingModal);
    });
    duckDebuggingModal.appendChild(removeButton);

    dragElement(duckDebuggingModal);
    duckDebuggingModal.style.zIndex = windowManager.base;
    duckDebuggingModal.addEventListener("mousedown", () => {
      duckDebuggingModal.style.zIndex = windowManager.moveOnTop();
    });

    // What Am I (paragraph on the right)
    const whatami = document.createElement("p");
    whatami.setAttribute("id", "right");
    whatami.innerHTML = /* html */ `I am a Front-End Engineer / New Media Artist with a background in art and computer science, always passionate about crafting immersive and engaging experiences, playing my tiny little part in shaping the future of the web.`;
    intro.appendChild(whatami);

    // Scroll prompt
    const scrollPrompt = document.createElement("div");
    scrollPrompt.setAttribute("id", "scroll-prompt");
    scrollPrompt.innerHTML = `SCROLL DOWN FOR MORE • SCROLL DOWN FOR MORE • SCROLL DOWN FOR MORE • SCROLL DOWN FOR MORE • SCROLL DOWN FOR MORE • SCROLL DOWN FOR MORE`;

    setTimeout(() => {
      if (document.documentElement.scrollTop === 0) {
        intro.appendChild(scrollPrompt);

        const flash = setInterval(
          () => (scrollPrompt.hidden = !scrollPrompt.hidden),
          700
        );

        setTimeout(() => {
          clearInterval(flash);
          scrollPrompt.hidden = true;
        }, 5000);
      }
    }, 20000);
  }
}
