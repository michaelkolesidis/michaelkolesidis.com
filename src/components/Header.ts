// https://michaelkolesidis.com
// Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import { WindowManager, dragElement } from 'dom-window-manager';

let windowManager = new WindowManager();

export default function header() {
  const header = document.getElementById('header');

  if (header != null) {
    // Name
    const name = document.createElement('div');
    name.setAttribute('id', 'name');
    name.innerHTML = /* html */ `MICHAEL K<span id="title-letter">O</span>LESIDIS`;
    header.appendChild(name);

    const smiley = document.createElement('div');
    smiley.setAttribute('id', 'smiley');
    smiley.innerHTML = `<img alt=Smiley" src="../../assets/smiley.svg" />`;
    header.appendChild(smiley);

    smiley.addEventListener('click', () => {
      smiley.classList.add('move-left');
      setTimeout(() => {
        smiley.classList.remove('move-left');
      }, 2000);
    });

    // Top gap
    const topGap = document.createElement('div');
    topGap.setAttribute('id', 'top-gap');
    topGap.innerHTML = `.`;
    header.appendChild(topGap);

    /* Styling */
    topGap.style.color = `white`;

    // Message Box
    const messageBox = document.createElement('div');
    messageBox.setAttribute('id', 'box');

    const content = document.createElement('div');
    content.classList.add('content');
    content.innerHTML = /* html */ `
        <p>DESIGN AWARD</p>
        <p>One Page Love</p>
        <p>February 2023</p>`;
    messageBox.appendChild(content);

    dragElement(messageBox);
    messageBox.style.zIndex = windowManager.base;
    messageBox.addEventListener('mousedown', () => {
      messageBox.style.zIndex = windowManager.moveOnTop();
    });

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.textContent = '✕';
    removeButton.addEventListener('click', () => {
      messageBox.style.opacity = '0';
      header.removeChild(messageBox);
    });
    messageBox.appendChild(removeButton);
    header.appendChild(messageBox);

    // Sticker
    const sticker = document.createElement('div');
    sticker.setAttribute('id', 'new');
    sticker.innerHTML = `<img alt="New! sticker" src="../../assets/new.svg" />`;
    header.appendChild(sticker);

    dragElement(sticker);
    sticker.style.zIndex = windowManager.base;

    sticker.addEventListener('mousedown', () => {
      sticker.style.zIndex = windowManager.moveOnTop();
    });

    // Chinese
    const chinese = document.createElement('p');
    chinese.setAttribute('id', 'chinese');
    chinese.innerHTML = `欢迎来到我的网站`;
    header.appendChild(chinese);

    dragElement(chinese);
    chinese.style.zIndex = windowManager.base;

    chinese.addEventListener('mousedown', () => {
      chinese.style.zIndex = windowManager.moveOnTop();
    });

    // Rays
    const rays = document.createElement('p');
    rays.setAttribute('id', 'rays');
    rays.innerHTML = `<img alt="Ray disc" src="../../assets/rays.svg" />`;
    header.appendChild(rays);

    dragElement(rays);
    rays.style.zIndex = windowManager.base;

    rays.addEventListener('mousedown', () => {
      rays.style.zIndex = windowManager.moveOnTop();
    });

    // Flowers
    const flowers = document.createElement('p');
    flowers.setAttribute('id', 'flowers');
    flowers.innerHTML = `<img id="flowers-1" alt="Flowers" src="../../assets/flowers1.gif" />
    <img alt="Welcome sign" id="flowers-2" src="../../assets/flowers2.gif" />`;
    header.appendChild(flowers);

    const flowers1 = document.getElementById('flowers-1');
    const flowers2 = document.getElementById('flowers-2');

    let flowerNumber = 1;

    setInterval(() => {
      if (flowerNumber === 1) {
        if (flowers1 && flowers2) {
          flowers1.style.opacity = '0';
          flowers2.style.opacity = '1';
        }
        flowerNumber = 2;
      } else if (flowerNumber === 2) {
        if (flowers1 && flowers2) {
          flowers2.style.opacity = '0';
          flowers1.style.opacity = '1';
        }
        flowerNumber = 1;
      }
    }, 4000);

    dragElement(flowers);
    flowers.style.zIndex = windowManager.base;

    flowers.addEventListener('mousedown', () => {
      flowers.style.zIndex = windowManager.moveOnTop();
    });

    // Welcome
    const welcome = document.createElement('div');
    welcome.setAttribute('id', 'welcome');
    welcome.innerHTML = `<img alt="Welcome sign" src="../../assets/welcome.gif" />`;
    header.appendChild(welcome);

    dragElement(welcome);
    welcome.style.zIndex = windowManager.base;

    welcome.addEventListener('mousedown', () => {
      welcome.style.zIndex = windowManager.moveOnTop();
    });
  }
}
