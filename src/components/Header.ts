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

import { WindowManager, dragElement } from 'dom-window-manager';
import { generateNewColor } from '../utils/functions';
import { colors } from '../data/colors';

let windowManager = new WindowManager(3);

export default function header() {
  const header = document.getElementById('header');
  if (!header) return;

  let appsWindowAppended = true;
  let contactWindowAppended = true;
  let noiseWindowAppended = true;
  let radioWindowAppended = true;
  let duckWindowsAppended = true;
  let duckWindow1Appended = true;
  let duckWindow2Appended = true;
  let duckWindow3Appended = true;
  // let pixelWindowAppended = true;
  // let emojiWindowAppended = true;

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
    appsWindow.style.background = colors[0]!.hex;
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
  noiseButton.textContent = 'TV';
  appsWindow.appendChild(noiseButton);

  noiseButton.addEventListener('mouseover', () => {
    appsWindow.style.background = colors[1]!.hex;
  });

  noiseButton.addEventListener('mouseout', () => {
    appsWindow.style.background = '#ffffff';
  });

  noiseButton.addEventListener('click', () => {
    if (!noiseWindowAppended) {
      header.appendChild(noiseWindow);
      noiseWindowAppended = true;
    }

    noiseWindow.style.zIndex = windowManager.moveOnTop();

    setTimeout(() => {
      noiseWindow.style.opacity = '100';
      noiseWindow.style.pointerEvents = 'all';
    }, 0);
  });

  const radioButton = document.createElement('div');
  radioButton.classList.add('left');
  radioButton.textContent = 'RADIO';
  appsWindow.appendChild(radioButton);

  radioButton.addEventListener('mouseover', () => {
    appsWindow.style.background = colors[2]!.hex;
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

  const ducksButton = document.createElement('div');
  ducksButton.textContent = 'DUCKS';
  appsWindow.appendChild(ducksButton);

  ducksButton.addEventListener('mouseover', () => {
    appsWindow.style.background = colors[3]!.hex;
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
    appsWindow.style.background = colors[4]!.hex;
  });

  pixelButton.addEventListener('mouseout', () => {
    appsWindow.style.background = '#ffffff';
  });

  const emojiButton = document.createElement('div');
  emojiButton.textContent = 'EMOJI';
  appsWindow.appendChild(emojiButton);

  emojiButton.addEventListener('mouseover', () => {
    appsWindow.style.background = colors[1]!.hex;
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

  // Noise window
  const noiseWindow = document.createElement('div');
  noiseWindow.setAttribute('id', 'noise-window');
  noiseWindow.classList.add('window');
  const noiseWindowTitle = document.createElement('div');
  noiseWindowTitle.classList.add('window-title');
  noiseWindowTitle.innerHTML = `The Only Real Channel™`;
  noiseWindow.appendChild(noiseWindowTitle);

  const canvas = document.createElement('canvas');
  canvas.width = 400;
  canvas.height = 100;
  canvas.setAttribute('id', 'noise');
  noiseWindow.appendChild(canvas);

  const gl = canvas.getContext('webgl');

  // Vertex shader
  const vertexShaderSource = `
    attribute vec4 a_position;
    void main() {
        gl_Position = a_position;
    }
`;

  // Fragment shader
  const fragmentShaderSource = `
    precision highp float;
    uniform float u_time;
    uniform vec2 u_resolution;

    float noise(vec2 pos, float evolve) {
        float e = fract((evolve*0.01));
        float cx = pos.x*e;
        float cy = pos.y*e;
        return fract(23.0*fract(2.0/fract(fract(cx*2.4/cy*23.0+pow(abs(cy/22.4),3.3))*fract(cx*evolve/pow(abs(cy),0.050)))));
    }

    void main() {
        vec2 fragCoord = gl_FragCoord.xy;
        float noise_val = noise(fragCoord, u_time);
        gl_FragColor = vec4(vec3(noise_val), 1.0);
    }
`;

  // Create shader program
  function createShaderProgram(
    gl: any,
    vertexShaderSource: any,
    fragmentShaderSource: any
  ) {
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.compileShader(vertexShader);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);
    gl.compileShader(fragmentShader);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    return program;
  }

  const program = createShaderProgram(
    gl,
    vertexShaderSource,
    fragmentShaderSource
  );
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

  let isPaused = false;

  // Pause/unpause on click
  // canvas.addEventListener('click', () => {
  //   isPaused = !isPaused;
  // });

  // Render loop
  function render() {
    if (!gl) return;
    if (!isPaused) {
      gl.uniform1f(timeUniformLocation, performance.now() * 0.001);
    }

    // Set resolution
    gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);

    // Draw
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    // Continue rendering
    requestAnimationFrame(render);
  }

  render();

  const closeButtonNoiseWindow = document.createElement('button');
  closeButtonNoiseWindow.classList.add('remove-button');
  closeButtonNoiseWindow.textContent = '✕';
  closeButtonNoiseWindow.addEventListener('click', () => {
    noiseWindow.style.opacity = '0';
    setTimeout(() => {
      header.removeChild(noiseWindow);
      noiseWindowAppended = false;
    }, 500);
  });
  noiseWindow.appendChild(closeButtonNoiseWindow);
  header.appendChild(noiseWindow);
  dragElement(noiseWindow);
  noiseWindow.addEventListener('mousedown', () => {
    noiseWindow.style.zIndex = windowManager.moveOnTop();
  });

  // Radio window
  const radioWindow = document.createElement('div');
  radioWindow.setAttribute('id', 'radio-window');
  radioWindow.classList.add('window');
  const radioWindowTitle = document.createElement('div');
  radioWindowTitle.classList.add('window-title');
  radioWindowTitle.innerHTML = `Radio`;
  radioWindow.appendChild(radioWindowTitle);

  const playButton = document.createElement('div');
  playButton.setAttribute('id', 'play-button');
  playButton.innerHTML = `⏵`;
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
          playButton.innerHTML = `⏸`;
          audioPlayer.play();
        } else {
          playButton.innerHTML = `⏵`;
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
      playButton.innerHTML = `⏵`;
    }, 500);
  });
  radioWindow.appendChild(closeButtonRadioWindow);
  header.appendChild(radioWindow);
  dragElement(radioWindow);
  radioWindow.addEventListener('mousedown', () => {
    radioWindow.style.zIndex = windowManager.moveOnTop();
  });

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
  flowers.innerHTML = `<img id="flowers-1" alt="Flowers" src="../../assets/flowers-1.gif" />
    <img alt="Welcome sign" id="flowers-2" src="../../assets/flowers-2.gif" />`;
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
