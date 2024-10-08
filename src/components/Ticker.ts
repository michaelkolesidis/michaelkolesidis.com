// https://michaelkolesidis.com
// Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

export default function ticker() {
  const tickerElemenets = document.getElementsByClassName('ticker');
  const ticker = tickerElemenets[0];

  // Message 1
  const message1 = document.createElement('div');
  message1.classList.add('ticker__item');
  message1.innerHTML = `WELCOME TO MY PLAYGROUND`;
  ticker.appendChild(message1);

  // Message 2
  const message2 = document.createElement('div');
  message2.classList.add('ticker__item');
  message2.innerHTML = `FEEL FREE TO PLAY WITH MY RUBBER DUCK`;
  ticker.appendChild(message2);

  // Message 3
  const message3 = document.createElement('div');
  message3.classList.add('ticker__item');
  message3.innerHTML = `CLICK ON ANYTHING COLORFUL FOR A NEW COLOR`;
  ticker.appendChild(message3);

  // Message 4
  const message4 = document.createElement('div');
  message4.classList.add('ticker__item');
  message4.innerHTML = `TRY MOVING THINGS AROUND`;
  ticker.appendChild(message4);

  // Message 5
  const message5 = document.createElement('div');
  message5.classList.add('ticker__item');
  message5.innerHTML = `TRUST ME, I AM AN ARTIST`;
  ticker.appendChild(message5);

  // Populate
  for (let i = 0; i < 20; i++) {
    ticker.appendChild(message1.cloneNode(true));
    ticker.appendChild(message2.cloneNode(true));
    ticker.appendChild(message3.cloneNode(true));
    ticker.appendChild(message4.cloneNode(true));
    ticker.appendChild(message5.cloneNode(true));
  }
}
