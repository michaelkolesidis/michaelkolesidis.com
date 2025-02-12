import { WindowManager, dragElement } from 'dom-window-manager';
import { generateNewColor } from '../utils/functions';
import { colors } from '../data/colors';

let windowManager = new WindowManager(3);

export default function header() {
  const header = document.getElementById('header');
  let appsWindowAppended = true;
  let contactWindowAppended = true;
  // let noiseWindowAppended = true;
  // let radioWindowAppended = true;
  let duckWindowsAppended = true;
  let duckWindow1Appended = true;
  let duckWindow2Appended = true;
  let duckWindow3Appended = true;
  // let pixelWindowAppended = true;
  // let emojiWindowAppended = true;

  if (header != null) {
    // Name
    const name = document.createElement('div');
    name.setAttribute('id', 'name');
    name.innerHTML = /* html */ `MICHAEL K<span id="title-letter">O</span>LESIDIS`;
    header.appendChild(name);

    // Smiley
    const smiley = document.createElement('div');
    smiley.setAttribute('id', 'smiley');
    smiley.innerHTML = `<img alt=Smiley" src="../../assets/smiley.svg" />`;
    header.appendChild(smiley);

    smiley.addEventListener('click', () => {
      smiley.classList.add('move-left');
      setTimeout(() => {
        smiley.classList.remove('move-left');
      }, 2000);

      if (!appsWindowAppended) {
        header.appendChild(appsWindow);
        appsWindowAppended = true;
      }

      appsWindow.style.zIndex = windowManager.moveOnTop();

      setTimeout(() => {
        appsWindow.style.opacity = '100';
        appsWindow.style.pointerEvents = 'all';
      }, 0);
    });

    // Apps window
    const appsWindow = document.createElement('div');
    appsWindow.setAttribute('id', 'apps-window');
    appsWindow.classList.add('window', 'list-window');

    const contactButton = document.createElement('div');
    contactButton.classList.add('left');
    contactButton.textContent = 'CONTACT';
    appsWindow.appendChild(contactButton);

    contactButton.addEventListener('mouseover', () => {
      appsWindow.style.background = colors[0].hex;
    });

    contactButton.addEventListener('mouseout', () => {
      appsWindow.style.background = '#ffffff';
    });

    contactButton.addEventListener('click', () => {
      if (!contactWindowAppended) {
        header.appendChild(contactWindow);
        contactWindowAppended = true;
      }

      contactWindow.style.zIndex = windowManager.moveOnTop();

      setTimeout(() => {
        contactWindow.style.opacity = '100';
        contactWindow.style.pointerEvents = 'all';
      }, 0);
    });

    const noiseButton = document.createElement('div');
    noiseButton.textContent = 'NOISE';
    appsWindow.appendChild(noiseButton);

    noiseButton.addEventListener('mouseover', () => {
      appsWindow.style.background = colors[1].hex;
    });

    noiseButton.addEventListener('mouseout', () => {
      appsWindow.style.background = '#ffffff';
    });

    const radioButton = document.createElement('div');
    radioButton.classList.add('left');
    radioButton.textContent = 'RADIO';
    appsWindow.appendChild(radioButton);

    radioButton.addEventListener('mouseover', () => {
      appsWindow.style.background = colors[2].hex;
    });

    radioButton.addEventListener('mouseout', () => {
      appsWindow.style.background = '#ffffff';
    });

    const ducksButton = document.createElement('div');
    ducksButton.textContent = 'DUCKS';
    appsWindow.appendChild(ducksButton);

    ducksButton.addEventListener('mouseover', () => {
      appsWindow.style.background = colors[3].hex;
    });

    ducksButton.addEventListener('mouseout', () => {
      appsWindow.style.background = '#ffffff';
    });

    ducksButton.addEventListener('click', () => {
      if (!duckWindowsAppended) {
        header.appendChild(duckWindow1);
        header.appendChild(duckWindow2);
        header.appendChild(duckWindow3);
        duckWindowsAppended = true;
        duckWindow1Appended = true;
        duckWindow2Appended = true;
        duckWindow3Appended = true;
      }

      duckWindow1.style.zIndex = windowManager.moveOnTop();
      duckWindow2.style.zIndex = windowManager.moveOnTop();
      duckWindow3.style.zIndex = windowManager.moveOnTop();

      setTimeout(() => {
        duckWindow1.style.opacity = '100';
        duckWindow1.style.pointerEvents = 'all';
        duckWindow2.style.opacity = '100';
        duckWindow2.style.pointerEvents = 'all';
        duckWindow3.style.opacity = '100';
        duckWindow3.style.pointerEvents = 'all';
      }, 0);
    });

    const pixelButton = document.createElement('div');
    pixelButton.classList.add('left');
    pixelButton.textContent = 'PIXEL';
    appsWindow.appendChild(pixelButton);

    pixelButton.addEventListener('mouseover', () => {
      appsWindow.style.background = colors[4].hex;
    });

    pixelButton.addEventListener('mouseout', () => {
      appsWindow.style.background = '#ffffff';
    });

    const emojiButton = document.createElement('div');
    emojiButton.textContent = 'EMOJI';
    appsWindow.appendChild(emojiButton);

    emojiButton.addEventListener('mouseover', () => {
      appsWindow.style.background = colors[1].hex;
    });

    emojiButton.addEventListener('mouseout', () => {
      appsWindow.style.background = '#ffffff';
    });

    const appsWindowTitle = document.createElement('div');
    appsWindowTitle.classList.add('window-title');
    appsWindowTitle.innerHTML = `Apps`;
    appsWindow.appendChild(appsWindowTitle);

    header.appendChild(appsWindow);

    dragElement(appsWindow);
    appsWindow.addEventListener('mousedown', () => {
      appsWindow.style.zIndex = windowManager.moveOnTop();
    });

    // Close button (apps window)
    const closeButtonAppsWindow = document.createElement('button');
    closeButtonAppsWindow.classList.add('remove-button');
    closeButtonAppsWindow.textContent = '✕';
    closeButtonAppsWindow.addEventListener('click', () => {
      appsWindow.style.opacity = '0';

      setTimeout(() => {
        header.removeChild(appsWindow);
        appsWindowAppended = false;
      }, 500);
    });
    appsWindow.appendChild(closeButtonAppsWindow);

    // Contact window
    const contactWindow = document.createElement('div');
    contactWindow.setAttribute('id', 'contact-window');
    contactWindow.classList.add('window', 'list-window');
    contactWindow.innerHTML = /* html */ `
    <a 
      target="_blank" 
      href="https://www.linkedin.com/in/michaelkolesidis"
      class="left"
    >
    LINKEDIN
    </a>
        <a 
      target="_blank" 
      href="https://mastodon.social/@michaelkolesidis"
    >
    MASTODON
    </a>
    <a 
      target="_blank" 
      href="https://bsky.app/profile/michaelkolesidis.bsky.social"
      class="left"      
    >
    BLUESKY
    </a>
    <a 
      target="_blank" 
      href="https://www.instagram.com/michaelkolesidis"
    >
    INSTA
    </a>
    <a 
      target="_blank" 
      href="https://github.com/michaelkolesidis"
      class="left"
    >
    GITHUB
    </a>
    <a
      target="_blank" 
      href="https://x.com/michael_kol_"
    >
    X/TWITTER
    </a>
    `;

    const contactWindowTitle = document.createElement('div');
    contactWindowTitle.classList.add('window-title');
    contactWindowTitle.innerHTML = `Contact`;
    contactWindow.appendChild(contactWindowTitle);

    header.appendChild(contactWindow);

    dragElement(contactWindow);
    contactWindow.addEventListener('mousedown', () => {
      contactWindow.style.zIndex = windowManager.moveOnTop();
    });

    // Close button (contact window)
    const closeButtonContactWindow = document.createElement('button');
    closeButtonContactWindow.classList.add('remove-button');
    closeButtonContactWindow.textContent = '✕';
    closeButtonContactWindow.addEventListener('click', () => {
      contactWindow.style.opacity = '0';

      setTimeout(() => {
        header.removeChild(contactWindow);
        contactWindowAppended = false;
      }, 500);
    });
    contactWindow.appendChild(closeButtonContactWindow);

    // Duck windows
    const duckWindow1 = document.createElement('div');
    duckWindow1.setAttribute('id', 'duck-window-1');
    duckWindow1.classList.add('window');
    const duckWindow1Title = document.createElement('div');
    duckWindow1Title.classList.add('window-title');
    duckWindow1Title.innerHTML = `Duck in a bathtub`;
    duckWindow1.appendChild(duckWindow1Title);
    const closeButtonDuckWindow1 = document.createElement('button');
    closeButtonDuckWindow1.classList.add('remove-button');
    closeButtonDuckWindow1.textContent = '✕';
    closeButtonDuckWindow1.addEventListener('click', () => {
      duckWindow1.style.opacity = '0';
      setTimeout(() => {
        header.removeChild(duckWindow1);
        duckWindow1Appended = false;

        if (!duckWindow2Appended && !duckWindow3Appended) {
          duckWindowsAppended = false;
        }
      }, 500);
    });
    duckWindow1.appendChild(closeButtonDuckWindow1);
    header.appendChild(duckWindow1);
    dragElement(duckWindow1);
    duckWindow1.addEventListener('mousedown', () => {
      duckWindow1.style.zIndex = windowManager.moveOnTop();
    });

    const duckWindow2 = document.createElement('div');
    duckWindow2.setAttribute('id', 'duck-window-2');
    duckWindow2.classList.add('window');
    const duckWindow2Title = document.createElement('div');
    duckWindow2Title.classList.add('window-title');
    duckWindow2Title.innerHTML = `Duck in the sea`;
    duckWindow2.appendChild(duckWindow2Title);
    const closeButtonDuckWindow2 = document.createElement('button');
    closeButtonDuckWindow2.classList.add('remove-button');
    closeButtonDuckWindow2.textContent = '✕';
    closeButtonDuckWindow2.addEventListener('click', () => {
      duckWindow2.style.opacity = '0';
      setTimeout(() => {
        header.removeChild(duckWindow2);
        duckWindow2Appended = false;

        if (!duckWindow1Appended && !duckWindow3Appended) {
          duckWindowsAppended = false;
        }
      }, 500);
    });
    duckWindow2.appendChild(closeButtonDuckWindow2);
    header.appendChild(duckWindow2);
    dragElement(duckWindow2);
    duckWindow2.addEventListener('mousedown', () => {
      duckWindow2.style.zIndex = windowManager.moveOnTop();
    });

    const duckWindow3 = document.createElement('div');
    duckWindow3.setAttribute('id', 'duck-window-3');
    duckWindow3.classList.add('window');
    const duckWindow3Title = document.createElement('div');
    duckWindow3Title.classList.add('window-title');
    duckWindow3Title.innerHTML = `Duck in a pool`;
    duckWindow3.appendChild(duckWindow3Title);
    const closeButtonDuckWindow3 = document.createElement('button');
    closeButtonDuckWindow3.classList.add('remove-button');
    closeButtonDuckWindow3.textContent = '✕';
    closeButtonDuckWindow3.addEventListener('click', () => {
      duckWindow3.style.opacity = '0';
      setTimeout(() => {
        header.removeChild(duckWindow3);
        duckWindow3Appended = false;

        if (!duckWindow1Appended && !duckWindow2Appended) {
          duckWindowsAppended = false;
        }
      }, 500);
    });
    duckWindow3.appendChild(closeButtonDuckWindow3);
    header.appendChild(duckWindow3);
    dragElement(duckWindow3);
    duckWindow3.addEventListener('mousedown', () => {
      duckWindow3.style.zIndex = windowManager.moveOnTop();
    });

    // Top gap
    const topGap = document.createElement('div');
    topGap.setAttribute('id', 'top-gap');
    topGap.innerHTML = `.`;
    topGap.style.color = `white`;
    header.appendChild(topGap);

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

    // Remove button (message box)
    const closeButton = document.createElement('button');
    closeButton.classList.add('remove-button');
    closeButton.textContent = '✕';
    closeButton.addEventListener('click', () => {
      messageBox.style.opacity = '0';
      header.removeChild(messageBox);
    });
    messageBox.appendChild(closeButton);
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

    // Canvas
    const sketchPlaceholder = document.getElementById('sketch-placeholder');

    if (sketchPlaceholder) {
      sketchPlaceholder.style.height = `${window.innerHeight - 140}px`;

      window.addEventListener('resize', () => {
        sketchPlaceholder.style.height = `${window.innerHeight - 140}px`;
        sunscreen.style.top = `${window.innerHeight}px`;

        const canvas = document.querySelector('canvas');
        if (canvas) {
          console.log(canvas);
          canvas.style.height = `${window.innerHeight - 140}px`;
        }
      });

      sketchPlaceholder.style.background = `rgb(${
        generateNewColor(colors, sketchPlaceholder, 'background').rgb
      })`;

      sketchPlaceholder.addEventListener('click', () => {
        sketchPlaceholder.style.background = `rgb(${
          generateNewColor(colors, sketchPlaceholder, 'background').rgb
        })`;
      });
    }

    // Sunscreen
    const sunscreen = document.createElement('img');
    sunscreen.setAttribute('src', 'assets/sunscreen.png');
    sunscreen.setAttribute('id', 'sunscreen');
    sunscreen.style.top = `${window.innerHeight}px`;

    sunscreen.addEventListener('click', () => {
      sunscreen.classList.add('shake');
      setTimeout(() => {
        sunscreen.classList.remove('shake');
      }, 500);

      if (sketchPlaceholder) {
        sketchPlaceholder.style.background = "url('../../assets/water.png')";
      }
    });

    header.appendChild(sunscreen);
  }
}
