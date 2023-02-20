// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

export default function ticker() {
  const tickerElemenets = document.getElementsByClassName("ticker");
  const ticker = tickerElemenets[0];

  // Message 1
  const message1 = document.createElement("div");
  message1.classList.add("ticker__item");
  message1.innerText = `WELCOME TO MY PLAYGROUND`;
  ticker.appendChild(message1);

  // Message 2
  const message2 = document.createElement("div");
  message2.classList.add("ticker__item");
  message2.innerText = `FEEL FREE TO PLAY WITH MY RUBBER DUCK`;
  ticker.appendChild(message2);

  // Message 3
  const message3 = document.createElement("div");
  message3.classList.add("ticker__item");
  message3.innerText = `CLICK ON ANYTHING COLORFUL FOR A NEW COLOR`;
  ticker.appendChild(message3);

  // Populate
  for (let i = 0; i < 12; i++) {
    ticker.appendChild(message1.cloneNode(true));
    ticker.appendChild(message2.cloneNode(true));
    ticker.appendChild(message3.cloneNode(true));
  }
}
