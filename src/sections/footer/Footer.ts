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

import './footer.scss';
import { colors } from '../../data/colors.js';
import { generateNewColor } from '../../utils/functions.js';

export default function footer() {
  const footer = document.getElementById('footer');
  if (!footer) return;

  // Logo SVG
  const logo = document.createElement('div');
  logo.innerHTML = /* html */ `<svg width="512" height="512" id="logo" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><rect id="logo-path" width="512" height="512" style="fill-rule:evenodd;fill:#000000;paint-order:stroke fill markers;stroke-linecap:round;stroke-linejoin:round;stroke-width:9.1721"/><path d="m195.6 56.385c-16.067 2.008-54.702 12.134-72.884 62.726-1.6349 4.55-3.8636 12.414-7.2276 15.552-12.934 12.064-46.312 10.032-56.691 19.236-2.9335 2.602-3.3773 10.228-2.1605 14.272 0.51311 1.7 1.2871 3.52 2.45 5.242 3.4655 5.13 9.992 9.528 21.434 13.728 7.6448 2.806 20.366 6.24 28.29 7.894 0.75435 0.1572 1.4982 0.3 2.2346 0.44 7.9438 1.54 22.214 1.46 27.844 7.452 4.02 4.276 6.0595 10.724 7.5261 18.022 0.87981 4.378 0.2509 11.462-2.1973 15.042-11.653 17.038-43.013 35.654-48.815 76.596-1.1604 8.184-1.266 25.256-0.19545 31.588 7.9021 46.756 56.543 111.98 164.74 111.82 200.12-0.34 199.46-164.74 194.91-213.26-1.8639-19.874-4.6142-34.044-8.0506-41.479-1.6129-3.488-2.5429-4.078-5.9865-3.794-3.4957 0.28001-6.8208 1.88-22.154 10.586-79.539 45.178-169.34 43.178-141.68-9.806 18.804-34.042 17.231-61.768 14.279-76.078-3.5709-17.466-10.222-30.819-20.902-41.964-9.371-9.78-21.046-16.564-35.387-20.566-13.673-3.816-32.93-4.064-39.38-3.27" fill="#ffc900" fill-rule="evenodd" stroke-width=".42635" style="fill:#ffc900"/></svg>`;
  footer.appendChild(logo);

  // Logo squeak
  const logoImage = document.getElementById('logo');
  const logoPath = document.getElementById('logo-path');

  if (!logoImage || !logoPath) return;

  const color = generateNewColor(colors, logoPath, 'fill', [
    'rgb(255, 201, 0)',
  ]).rgb;
  logoPath.style.fill = `rgb(${color})`;

  logoImage.addEventListener('click', (event) => {
    event.stopPropagation();

    const squeak = new Audio('../../assets/sounds/squeak.mp3');
    squeak.playbackRate = 1.35;
    squeak.play();

    const color = generateNewColor(colors, logoPath, 'fill', [
      'rgb(255, 201, 0)',
    ]).rgb;
    logoPath.style.fill = `rgb(${color})`;
  });

  // Copyright
  const copyright = document.createElement('p');
  copyright.id = 'copyright';
  copyright.textContent = '© Michael Kolesidis';
  footer.appendChild(copyright);

  // Desktop prompt (mobile view)
  if (window.innerWidth < 700) {
    const desktopPrompt = document.createElement('p');
    desktopPrompt.id = 'desktop-prompt';
    desktopPrompt.textContent =
      'If you liked my website, visit it from your desktop/laptop for the full experience!';
    footer.appendChild(desktopPrompt);
  }

  // Disclaimer
  const disclaimer = document.createElement('div');
  disclaimer.id = 'disclaimer';
  disclaimer.innerHTML = `<p>Licensed under the <a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank" >AGPL-3.0-or-later</a></p><br><br><p>Designed and developed from the scratch, with no libraries, frameworks, or templates.</p>`;
  footer.appendChild(disclaimer);

  // Accessible
  const accessible = document.createElement('div');
  accessible.id = 'accessible';
  accessible.innerHTML = `<p>There is an <a href="/minimal" target="_blank">accessible version</a> available.</p>`;
  footer.appendChild(accessible);

  // Bottom links
  const bottomLinks = document.createElement('div');
  bottomLinks.id = 'bottom-links';
  footer.appendChild(bottomLinks);

  // Source  code
  const sourceCode = document.createElement('a');
  sourceCode.classList.add('bottom-link');
  sourceCode.href = 'https://github.com/michaelkolesidis/michaelkolesidis.com';
  sourceCode.target = '_blank';
  sourceCode.textContent = 'Source';
  bottomLinks.appendChild(sourceCode);

  // Privacy Policy
  const privacy = document.createElement('a');
  privacy.classList.add('bottom-link');
  privacy.href = '/privacy';
  privacy.target = '_blank';
  privacy.textContent = 'Privacy Policy';
  bottomLinks.appendChild(privacy);
}
