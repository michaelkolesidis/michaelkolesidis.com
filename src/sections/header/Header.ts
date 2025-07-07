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

import './header.scss';
import './pixelated.scss';
import { WindowManager, dragElement } from 'dom-window-manager';
import { generateNewColor } from '../../utils/functions';
import { colors } from '../../data/colors';
import { socialList } from '../../data/social.js';
import { startGame } from './pixelated.js';
import fragment from '../../shaders/fragment.glsl?raw';
import vertex from '../../shaders/vertex.glsl?raw';

let windowManager = new WindowManager(3);

export default function header() {
  const header = document.getElementById('header');
  if (!header) return;

  let appsWindowAppended = true;
  let linksWindowAppended = true;
  let tvWindowAppended = true;
  let radioWindowAppended = true;
  let pixelWindowAppended = true;

  // Name
  const name = document.createElement('div');
  name.setAttribute('id', 'name');
  name.innerHTML = /* html */ `Michael Kolesidi<span id="falling-letter">s</span>`;

  document.addEventListener('DOMContentLoaded', () => {
    const fallingLetter = document.getElementById('falling-letter');

    if (fallingLetter) {
      fallingLetter.addEventListener('click', () => {
        fallingLetter.classList.add('clicked');
      });
    }
  });

  window.addEventListener('scroll', function () {
    if (window.scrollY >= 30) {
      name.classList.add('scrolled');
      name.innerHTML = /* html */ `Michael Kolesidis`;
    } else {
      name.classList.remove('scrolled');
      name.innerHTML = /* html */ `Michael Kolesidi<span id="falling-letter">s</span>`;

      const fallingLetter = document.getElementById('falling-letter');

      if (fallingLetter) {
        fallingLetter.addEventListener('click', () => {
          fallingLetter.classList.add('clicked');
        });
      }
    }
  });

  header.appendChild(name);

  // Smiley
  const smiley = document.createElement('div');
  smiley.setAttribute('id', 'smiley');
  smiley.innerHTML = `<img alt="Smiley" src="../../assets/smiley-melting.svg" />`;
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

  const appsWindowTitle = document.createElement('div');
  appsWindowTitle.classList.add('window-title');
  appsWindowTitle.innerHTML = `Apps`;
  appsWindow.appendChild(appsWindowTitle);

  header.appendChild(appsWindow);

  dragElement(appsWindow, appsWindowTitle);
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

  // Links button
  const linksButton = document.createElement('div');
  linksButton.classList.add('app-button', 'left');
  linksButton.textContent = 'Links';
  appsWindow.appendChild(linksButton);

  linksButton.addEventListener('mouseover', () => {
    appsWindow.style.background = colors[0]!.hex;
  });

  linksButton.addEventListener('mouseout', () => {
    appsWindow.style.background = '#ffffff';
  });

  linksButton.addEventListener('click', () => {
    if (!linksWindowAppended) {
      header.appendChild(linksWindow);
      linksWindowAppended = true;
    }

    linksWindow.style.zIndex = windowManager.moveOnTop();

    setTimeout(() => {
      linksWindow.style.opacity = '100';
      linksWindow.style.pointerEvents = 'all';
    }, 0);
  });

  // TV button
  const tvButton = document.createElement('div');
  tvButton.classList.add('app-button');
  tvButton.textContent = 'TV';
  appsWindow.appendChild(tvButton);

  tvButton.addEventListener('mouseover', () => {
    appsWindow.style.background = colors[1]!.hex;
  });

  tvButton.addEventListener('mouseout', () => {
    appsWindow.style.background = '#ffffff';
  });

  tvButton.addEventListener('click', () => {
    if (!tvWindowAppended) {
      header.appendChild(tvWindow);
      tvWindowAppended = true;
    }

    tvWindow.style.zIndex = windowManager.moveOnTop();

    setTimeout(() => {
      showNextDuck();
      tvWindow.style.opacity = '100';
      tvWindow.style.pointerEvents = 'all';
    }, 0);
  });

  // Radio button
  const radioButton = document.createElement('div');
  radioButton.classList.add('app-button', 'left');
  radioButton.textContent = 'Radio';
  appsWindow.appendChild(radioButton);

  radioButton.addEventListener('mouseover', () => {
    appsWindow.style.background = colors[3]!.hex;
  });

  radioButton.addEventListener('mouseout', () => {
    appsWindow.style.background = '#ffffff';
  });

  radioButton.addEventListener('click', () => {
    if (!radioWindowAppended) {
      header.appendChild(radioWindow);
      radioWindowAppended = true;
    }

    radioWindow.style.zIndex = windowManager.moveOnTop();

    setTimeout(() => {
      radioWindow.style.opacity = '100';
      radioWindow.style.pointerEvents = 'all';
    }, 0);
  });

  // Pixel button
  const pixelButton = document.createElement('div');
  pixelButton.classList.add('app-button');

  pixelButton.textContent = 'Pixel';
  appsWindow.appendChild(pixelButton);

  pixelButton.addEventListener('mouseover', () => {
    appsWindow.style.background = colors[4]!.hex;
  });

  pixelButton.addEventListener('mouseout', () => {
    appsWindow.style.background = '#ffffff';
  });

  pixelButton.addEventListener('click', () => {
    if (!pixelWindowAppended) {
      header.appendChild(pixelWindow);
      pixelWindowAppended = true;
    }

    pixelWindow.style.zIndex = windowManager.moveOnTop();

    setTimeout(() => {
      pixelWindow.style.opacity = '100';
      pixelWindow.style.pointerEvents = 'all';
    }, 0);
  });

  // Pixel window
  const pixelWindow = document.createElement('div');
  pixelWindow.id = 'pixel-window';
  pixelWindow.classList.add('window');
  pixelWindow.innerHTML = /* html */ ` 
<div id="top-bar">
  <div id="status"></div>
  <div id="button-container">
    <div id="new-button">New</div>
  </div>
</div>
<div id="board"></div>
<div id="controls"></div>`;

  const pixelWindowTitle = document.createElement('div');
  pixelWindowTitle.classList.add('window-title');
  pixelWindowTitle.innerHTML = `Pixelated`;
  pixelWindow.appendChild(pixelWindowTitle);

  header.appendChild(pixelWindow);

  dragElement(pixelWindow, pixelWindowTitle);
  pixelWindow.addEventListener('mousedown', () => {
    pixelWindow.style.zIndex = windowManager.moveOnTop();
  });

  // Close button (pixel window)
  const closeButtonPixelWindow = document.createElement('button');
  closeButtonPixelWindow.classList.add('remove-button');
  closeButtonPixelWindow.textContent = '✕';
  closeButtonPixelWindow.addEventListener('click', () => {
    pixelWindow.style.opacity = '0';

    setTimeout(() => {
      header.removeChild(pixelWindow);
      pixelWindowAppended = false;
    }, 500);
  });
  pixelWindow.appendChild(closeButtonPixelWindow);

  startGame();

  // Links window
  const linksWindow = document.createElement('div');
  linksWindow.setAttribute('id', 'links-window');
  linksWindow.classList.add('window', 'list-window');

  socialList.forEach(({ name, filename, url }) => {
    const link = document.createElement('a');
    link.href = url;
    link.rel = 'noopener noreferrer';
    link.target = '_blank';
    link.innerHTML = `<img src="../../assets/icons/${filename}.svg" class="social-icon" alt="${name} logo">`;
    linksWindow.appendChild(link);
  });

  const linksWindowTitle = document.createElement('div');
  linksWindowTitle.classList.add('window-title');
  linksWindowTitle.innerHTML = `Links`;
  linksWindow.appendChild(linksWindowTitle);

  header.appendChild(linksWindow);

  dragElement(linksWindow, linksWindowTitle);
  linksWindow.addEventListener('mousedown', () => {
    linksWindow.style.zIndex = windowManager.moveOnTop();
  });

  // Close button (links window)
  const closeButtonLinksWindow = document.createElement('button');
  closeButtonLinksWindow.classList.add('remove-button');
  closeButtonLinksWindow.textContent = '✕';
  closeButtonLinksWindow.addEventListener('click', () => {
    linksWindow.style.opacity = '0';

    setTimeout(() => {
      header.removeChild(linksWindow);
      linksWindowAppended = false;
    }, 500);
  });
  linksWindow.appendChild(closeButtonLinksWindow);

  // TV window
  const tvWindow = document.createElement('div');
  tvWindow.setAttribute('id', 'tv-window');
  tvWindow.classList.add('window');

  // Title
  const tvWindowTitle = document.createElement('div');
  tvWindowTitle.classList.add('window-title');
  tvWindowTitle.innerHTML = `Duck TV`;

  // Canvas for noise
  const canvas = document.createElement('canvas');
  canvas.width = 480;
  canvas.height = 330;
  canvas.setAttribute('id', 'noise');
  tvWindow.appendChild(canvas);

  // Overlay for duck images
  const overlay = document.createElement('div');
  overlay.setAttribute('id', 'duck-overlay');
  overlay.classList.add('duck-overlay');
  tvWindow.appendChild(overlay);

  const duckImages = [
    { src: '../../assets/duck-tv-1.gif', duration: 5000 },
    { src: '../../assets/duck-tv-2.gif', duration: 8300 },
    { src: '../../assets/duck-tv-3.gif', duration: 2000 },
    { src: '../../assets/duck-tv-4.gif', duration: 4000 },
    { src: '../../assets/duck-tv-5.gif', duration: 3000 },
    { src: '../../assets/duck-tv-6.gif', duration: 10000 },
  ];

  // Create duck image elements
  const duckElements = duckImages.map(({ src }) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'An animated gif of a duck';
    img.classList.add('duck-img');
    overlay.appendChild(img);
    return img;
  });

  // Cycle logic
  let currentIndex = 0;
  function showNextDuck() {
    duckElements.forEach((img) => (img.style.opacity = '0'));

    setTimeout(() => {
      const currentImg = duckElements[currentIndex];
      if (!currentImg) return;

      currentImg.style.opacity = '1';

      const duration = duckImages[currentIndex]?.duration;
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % duckImages.length;
        showNextDuck();
      }, duration);
    }, 1500); // delay before showing the next image
  }

  // WebGL TV Shader
  const gl = canvas.getContext('webgl');
  if (!gl) return;

  // Create shader program
  function createShaderProgram(gl: any, vertex: any, fragment: any) {
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertex);
    gl.compileShader(vertexShader);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragment);
    gl.compileShader(fragmentShader);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    return program;
  }

  const program = createShaderProgram(gl, vertex, fragment);
  if (!gl) return;
  gl.useProgram(program);

  // Define vertex positions for a full-screen quad (spanning normalized device coordinates [-1, 1])
  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0]),
    gl.STATIC_DRAW
  );

  // Set up attributes and uniforms
  const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
  gl.enableVertexAttribArray(positionAttributeLocation);
  gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

  const timeUniformLocation = gl.getUniformLocation(program, 'u_time');
  const resolutionUniformLocation = gl.getUniformLocation(
    program,
    'u_resolution'
  );

  // Render loop
  function render() {
    if (!gl) return;

    gl.uniform1f(timeUniformLocation, performance.now() * 0.001);

    // Set resolution
    gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);

    // Draw
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    // Continue rendering
    requestAnimationFrame(render);
  }

  render();

  // Close button
  const closeButtonTvWindow = document.createElement('button');
  closeButtonTvWindow.classList.add('remove-button');
  closeButtonTvWindow.textContent = '✕';
  closeButtonTvWindow.addEventListener('click', () => {
    tvWindow.style.opacity = '0';
    setTimeout(() => {
      header.removeChild(tvWindow);
      tvWindowAppended = false;
    }, 500);
  });
  tvWindow.appendChild(tvWindowTitle);
  tvWindow.appendChild(closeButtonTvWindow);

  // Add to DOM

  header.appendChild(tvWindow);
  dragElement(tvWindow, tvWindowTitle);
  tvWindow.addEventListener('mousedown', () => {
    tvWindow.style.zIndex = windowManager.moveOnTop();
  });

  // Radio window
  const radioWindow = document.createElement('div');
  radioWindow.setAttribute('id', 'radio-window');
  radioWindow.classList.add('window');
  const radioWindowTitle = document.createElement('div');
  radioWindowTitle.classList.add('window-title');
  radioWindowTitle.innerHTML = `Radio`;
  radioWindow.appendChild(radioWindowTitle);

  const playButton = document.createElement('img');
  playButton.setAttribute('id', 'play-button');
  playButton.src = '../../assets/buttons/play.svg';
  playButton.alt = 'Play';
  radioWindow.appendChild(playButton);

  const audioPlayer = document.createElement('audio');
  audioPlayer.setAttribute('id', 'audio-player');
  audioPlayer.volume = 0.5;
  radioWindow.appendChild(audioPlayer);

  async function loadM3UPlaylist(url: string) {
    try {
      const response = await fetch(url);
      const text = await response.text();
      const lines = text.split('\n').map((line) => line.trim());
      let streamUrl = null;

      for (let i = 0; i < lines.length; i++) {
        if (lines[i]!.startsWith('http')) {
          streamUrl = lines[i];
          break; // Use the first stream URL found
        }
      }

      if (!streamUrl) {
        return;
      }

      audioPlayer.src = streamUrl;

      playButton.addEventListener('click', () => {
        if (audioPlayer.paused) {
          playButton.src = '../../assets/buttons/pause.svg'; // ⏸
          audioPlayer.play();
        } else {
          playButton.src = '../../assets/buttons/play.svg'; // ⏵
          audioPlayer.pause();
        }
      });
    } catch (error) {
      console.error('Error loading M3U file:', error);
    }
  }
  loadM3UPlaylist('../../assets/music/asp.m3u');

  const closeButtonRadioWindow = document.createElement('button');
  closeButtonRadioWindow.classList.add('remove-button');
  closeButtonRadioWindow.textContent = '✕';
  closeButtonRadioWindow.addEventListener('click', () => {
    audioPlayer.pause();
    radioWindow.style.opacity = '0';
    setTimeout(() => {
      header.removeChild(radioWindow);
      radioWindowAppended = false;
      playButton.src = '../../assets/buttons/play.svg';
    }, 500);
  });
  radioWindow.appendChild(closeButtonRadioWindow);
  header.appendChild(radioWindow);
  dragElement(radioWindow, radioWindowTitle);
  radioWindow.addEventListener('mousedown', () => {
    radioWindow.style.zIndex = windowManager.moveOnTop();
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
  sticker.style.top = `${window.innerHeight + 50}px`;

  header.appendChild(sticker);

  dragElement(sticker);
  sticker.style.zIndex = windowManager.base;

  sticker.addEventListener('mousedown', () => {
    sticker.style.zIndex = windowManager.moveOnTop();
  });

  // Project Request
  const projectRequest = document.createElement('p');
  projectRequest.classList.add('project-request');
  projectRequest.innerHTML = `<a href="https://forms.gle/Vg7kH5PRosqU3HYx6" target="_blank">Submit Project Request</a>`;
  header.appendChild(projectRequest);

  dragElement(projectRequest);
  projectRequest.style.zIndex = windowManager.base;

  projectRequest.addEventListener('mousedown', () => {
    projectRequest.style.zIndex = windowManager.moveOnTop();
  });

  // Japanese
  const japanese = document.createElement('p');
  japanese.setAttribute('id', 'japanese');
  japanese.innerHTML = `ラバーダック`;
  header.appendChild(japanese);

  dragElement(japanese);
  japanese.style.zIndex = windowManager.base;

  japanese.addEventListener('mousedown', () => {
    japanese.style.zIndex = windowManager.moveOnTop();
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

  // Art
  const art = document.createElement('p');
  art.setAttribute('id', 'art');
  art.innerHTML = `<img id="art-1" alt="Art" src="../../assets/art-2.gif" />
    <img alt="Welcome sign" id="art-2" src="../../assets/art-1.gif" />`;
  header.appendChild(art);

  const art1 = document.getElementById('art-1');
  const art2 = document.getElementById('art-2');

  let flowerNumber = 1;

  setInterval(() => {
    if (flowerNumber === 1) {
      if (art1 && art2) {
        art1.style.opacity = '0';
        art2.style.opacity = '1';
      }
      flowerNumber = 2;
    } else if (flowerNumber === 2) {
      if (art1 && art2) {
        art2.style.opacity = '0';
        art1.style.opacity = '1';
      }
      flowerNumber = 1;
    }
  }, 4000);

  dragElement(art);
  art.style.zIndex = windowManager.base;

  art.addEventListener('mousedown', () => {
    art.style.zIndex = windowManager.moveOnTop();
  });

  // Welcome
  const welcome = document.createElement('div');
  welcome.setAttribute('id', 'welcome');
  welcome.innerHTML = `<img alt="Welcome sign" src="../../assets/welcome.svg" />`;
  header.appendChild(welcome);

  dragElement(welcome);
  welcome.style.zIndex = windowManager.base;

  welcome.addEventListener('mousedown', () => {
    welcome.style.zIndex = windowManager.moveOnTop();
  });

  // Canvas
  const duckPlaceholder = document.getElementById('duck-placeholder');

  if (duckPlaceholder) {
    duckPlaceholder.style.height = `${window.innerHeight - 140}px`;

    let duckClicked = false;

    window.addEventListener('duckClicked', () => {
      duckClicked = true;
    });

    window.addEventListener('resize', () => {
      duckPlaceholder.style.height = `${window.innerHeight - 140}px`;
      sunscreen.style.top = `${window.innerHeight + 50}px`;
      sticker.style.top = `${window.innerHeight + 50}px`;

      const canvas = document.querySelector('canvas');
      if (canvas) {
        canvas.style.height = `${window.innerHeight - 140}px`;
      }
    });

    duckPlaceholder.style.background = `rgb(${
      generateNewColor(colors, duckPlaceholder, 'background').rgb
    })`;

    duckPlaceholder.addEventListener('click', () => {
      if (duckClicked) {
        duckClicked = false;
        return; // Skip this click because it came from the duck
      }

      duckPlaceholder.style.background = `rgb(${
        generateNewColor(colors, duckPlaceholder, 'background').rgb
      })`;
    });
  }

  // Sunscreen
  const sunscreen = document.createElement('img');
  sunscreen.setAttribute('src', 'assets/sunscreen.png');
  sunscreen.setAttribute('id', 'sunscreen');
  sunscreen.setAttribute('alt', 'A bottle of Hawaiian Tropic sunscreen');
  sunscreen.style.top = `${window.innerHeight + 50}px`;

  dragElement(sunscreen);
  sunscreen.style.zIndex = windowManager.base;

  sunscreen.addEventListener('mousedown', () => {
    sunscreen.style.zIndex = windowManager.moveOnTop();
  });

  sunscreen.addEventListener('click', () => {
    sunscreen.classList.add('shake');
    setTimeout(() => {
      sunscreen.classList.remove('shake');
    }, 500);

    if (duckPlaceholder) {
      duckPlaceholder.style.background = "url('../../assets/water.png')";
    }
  });

  header.appendChild(sunscreen);
}
