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

  // Populate
  for (let i = 0; i < 25; i++) {
    ticker.appendChild(message1.cloneNode(true));
    ticker.appendChild(message2.cloneNode(true));
    ticker.appendChild(message3.cloneNode(true));
    ticker.appendChild(message4.cloneNode(true));
  }
}
