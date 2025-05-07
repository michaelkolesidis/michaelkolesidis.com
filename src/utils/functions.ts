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

// Generates a new color from a predefined array of colors, with optional exclusions
export const generateNewColor = (
  colors: any,
  element: any,
  property: string,
  excludeColors: string[] = []
) => {
  const oldColor = element.style[property];

  let num = 0;
  let newColor: string;
  let isColorNew = false;

  while (!isColorNew) {
    num = Math.floor(Math.random() * colors.length);
    newColor = `rgb(${colors[num].rgb})`;

    if (newColor !== oldColor && !excludeColors.includes(newColor)) {
      isColorNew = true;
    }
  }

  return colors[num];
};

// Get scroll distance as a CSS variable
export const getScrollDistanceCss = (): void => {
  window.addEventListener('scroll', () => {
    const scrollPercentage =
      window.scrollY / (document.body.offsetHeight - window.innerHeight);
    document.body.style.setProperty('--scroll', scrollPercentage.toString());
  });
};

export const disableRightClick = (): void => {
  document.addEventListener('contextmenu', (e) => e.preventDefault());
};

// Animate page title with a scrolling effect
export const animateTitle = (): void => {
  const message = 'Michael Kolesidis';
  let position = 0;
  let forward = true;

  const updateTitle = () => {
    document.title = forward
      ? message.substring(0, ++position)
      : message.substring(message.length - --position);

    // Toggle direction at the beginning or end of the message
    if (position === message.length || position === 0) forward = !forward;

    setTimeout(updateTitle, 200);
  };

  document.addEventListener('DOMContentLoaded', updateTitle);
};

export const fancyConsoleLog = (): void => {
  const svg = `
<svg width="200" height="200" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 55 55" style="enable-background:new 0 0 50 50;" xml:space="preserve">
<style type="text/css">
  .st0{fill:#ffc900;}
  .st1{fill:#ffffff;}
  .bounce{
    transform-origin: center center;
    animation-name: bounce;
    animation-duration: 500ms;
    animation-timing-function: cubic-bezier(.25,.72,.15,1.17);
    animation-iteration-count: infinite;
  }
  @keyframes bounce {
    0%, 50%, 100% {
      transform:
        rotate3d(0, 0, 0, 0deg)
        translate3d(5px, 5px, 0);
    }
    20% {
      transform:
        rotate3d(0, 0, 1, 4deg)
        translate3d(0, 0, 0);
    }
    70% {
      transform:
        rotate3d(0, 0, 1, -4deg)
        translate3d(0, 0, 0);
    }
  }
</style>
<g class="bounce">
  <circle class="st0" cx="25" cy="25" r="25"/>
  <polygon points="44.5,21 3.9,21 3.9,24.3 5.7,24.3 5.7,25.9 7.1,25.9 7.1,27.4 8.8,27.4 8.8,29 20.2,29 20.2,27.4 21.8,27.4
        21.8,25.9 23.4,25.9 23.4,24.3 26.7,24.3 26.7,25.9 28.2,25.9 28.2,27.4 29.8,27.4 29.8,29 41.2,29 41.2,27.4 42.8,27.4
        42.8,25.9 44.5,25.9 44.5,24.3 44.5,24.2 46.1,24.2 46.1,22.6 46.1,21"/>
  <rect x="7.1" y="22.5" class="st1" width="1.6" height="1.6"/>
  <rect x="10.5" y="22.5" class="st1" width="1.6" height="1.6"/>
  <rect x="8.8" y="24.2" class="st1" width="1.6" height="1.6"/>
  <rect x="12.1" y="24.2" class="st1" width="1.6" height="1.6"/>
  <rect x="10.5" y="25.8" class="st1" width="1.6" height="1.6"/>
  <rect x="13.8" y="25.8" class="st1" width="1.6" height="1.6"/>
  <rect x="28.2" y="22.5" class="st1" width="1.6" height="1.6"/>
  <rect x="31.5" y="22.5" class="st1" width="1.6" height="1.6"/>
  <rect x="29.8" y="24.2" class="st1" width="1.6" height="1.6"/>
  <rect x="33.1" y="24.2" class="st1" width="1.6" height="1.6"/>
  <rect x="31.5" y="25.8" class="st1" width="1.6" height="1.6"/>
  <rect x="34.8" y="25.8" class="st1" width="1.6" height="1.6"/>
</g>
</svg>
`;

  const svgDataUrl = `data:image/svg+xml;base64,${btoa(svg)}`;

  console.log(
    '%c                                      ',
    `
    background-image: url(${svgDataUrl});
    padding-bottom: 100px;
    padding-left: 100px;
    margin: 20px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  `
  );

  console.log(
    `%cDev by Michael Kolesidis https://michaelkolesidis.com`,
    'color:#fff;font-size:16px; padding:0.45rem 0.75rem; margin: 0.3rem auto 1.3rem auto; font-family: Metropolis, Helvetica, sans-serif; border: 2px solid #0dd8d8; border-radius: 4px; font-weight: 500; background-size: cover;background-repeat: no-repeat;border: double 4px transparent;background-image: linear-gradient(#000, #122), radial-gradient(circle at top left, #ffc900,rgb(255, 151, 234));background-origin: border-box;background-clip: padding-box, border-box;'
  );
};
