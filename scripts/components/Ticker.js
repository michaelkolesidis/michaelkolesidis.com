// © 2022 Michael Kolesidis. All rights reserved.
// michael.kolesidis@gmail.com

export default function ticker() {
  const tickerElemenets = document.getElementsByClassName("ticker");
  const ticker = tickerElemenets[0];

  let message = document.createElement("div");

  message.classList.add("ticker__item");
  message.innerText = `UNDER CONSTRUCTION`;

  ticker.appendChild(message);

  for (let i = 0; i < 19; i++) {
    ticker.appendChild(message.cloneNode(true));
  }
}
