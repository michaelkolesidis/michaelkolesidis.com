/*
 *  Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 *  ATTENTION! FREE SOFTWARE
 *  This website is free software (free as in freedom).
 *  If you use any part of this code, you must make your entire project's source code
 *  publicly available under the same license. This applies whether you modify the code
 *  or use it as it is in your own project. This ensures that all modifications and
 *  derivative works remain free software, so that everyone can benefit.
 *  If you are not willing to comply with these terms, you must refrain from using any part of this code.
 *
 *  For full license terms and conditions, you can read the AGPL-3.0 here:
 *  https://www.gnu.org/licenses/agpl-3.0.html
 */

import './ticker.scss';

export default function ticker() {
  const ticker = document.getElementsByClassName('ticker')?.[0];
  if (!ticker) return;

  const messages =
    window.innerWidth > 1000
      ? [
          'WELCOME TO MY PLAYGROUND',
          'FEEL FREE TO PLAY WITH MY RUBBER DUCK',
          'CLICK ON ANYTHING COLORFUL FOR A NEW COLOR',
          'TRY MOVING THINGS AROUND',
          'SMILEY IS YOUR FRIEND',
        ]
      : ['VISIT THE DESKTOP VERSION FOR THE FULL EXPERIENCE', '•'];

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
  for (let i = 0; i < 50; i++) {
    messageElements.forEach((msg) => ticker.appendChild(msg.cloneNode(true)));
  }
}
