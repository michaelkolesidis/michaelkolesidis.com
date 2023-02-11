// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

export default function ticker() {
  const tickerElemenets = document.getElementsByClassName("ticker");
  const ticker = tickerElemenets[0];

  let message1 = document.createElement("div");

  message1.classList.add("ticker__item");
  message1.innerText = `PERPETUALLY UNDER CONSTRUCTION`;

  ticker.appendChild(message1);

  let message2 = document.createElement("div");

  message2.classList.add("ticker__item");
  message2.innerText = `CLICK ANYWHERE FOR NEW COLORS`;

  ticker.appendChild(message2);

  for (let i = 0; i < 6; i++) {
    ticker.appendChild(message1.cloneNode(true));
    ticker.appendChild(message2.cloneNode(true));
  }
}
