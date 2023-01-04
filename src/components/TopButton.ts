// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import { scrollFunction, topFunction } from "../functions.js";

export default function topButton() {
  const topButton = document.getElementById("top-button");

  if (topButton != null) {
    topButton.innerHTML = "TOP";

    // When the user clicks on the button, scroll to the top of the document
    topButton.addEventListener("click", function () {
      topFunction();
    });

    // When the user scrolls down the given distance from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction(topButton, 300);
    };
  }
}
