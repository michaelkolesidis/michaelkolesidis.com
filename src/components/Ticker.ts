export default function ticker() {
  const ticker = document.getElementsByClassName('ticker')?.[0];
  if (!ticker) return;

  const messages = [
    'WELCOME TO MY PLAYGROUND',
    'FEEL FREE TO PLAY WITH MY RUBBER DUCK',
    'CLICK ON ANYTHING COLORFUL FOR A NEW COLOR',
    'TRY MOVING THINGS AROUND',
    'SMILEY IS YOUR FRIEND',
  ];

  // Create elements
  const messageElements = messages.map((text) => {
    const div = document.createElement('div');
    div.classList.add('ticker-item');
    div.innerHTML = text;
    return div;
  });

  // Append original messages
  messageElements.forEach((msg) => ticker.appendChild(msg));

  // Append additional copies
  for (let i = 0; i < 25; i++) {
    messageElements.forEach((msg) => ticker.appendChild(msg.cloneNode(true)));
  }
}
