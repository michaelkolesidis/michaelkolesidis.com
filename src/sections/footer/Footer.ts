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
  logo.innerHTML = /* html */ `
  <svg width="512" height="512" id="logo" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path id="logo-path" d="m0 0h512v512h-512z" style="fill-rule:evenodd;fill:#fff;paint-order:stroke fill markers"/><path d="m99.063 56.003s56.096 73.603 14.976 134.75c-17.909 22.421-38.442 42.701-58.039 63.642 22.529 29.042 53.089 54.533 66.312 89.787 8.1399 25.434 12.091 66.333-19.058 111.81l108.23-1.9e-4c32.259-5e-5 70.598-43.35 27.612-83.594l-153.15-115.96 142.04-107c33.79-25.454 38.522-70.744 6.8626-87.487-9.4485-4.9966-26.75-5.9535-37.284-5.9535zm203.06-0.0018c17.987 25.089 17.321 48.801 12.585 64.93-2.0344 6.9266-8.8828 16.336-14.194 21.224-50.118 46.128-116.72 77.469-174.22 113.68l162.93 104.97c7.7084 4.9665 19.491 14.427 23.9 22.899 18.633 35.796-12.061 72.293-12.061 72.293h108.33c7.8353 0 23.101-1.2388 29.375-5.7306 23.945-17.143 31.334-77.928-35.391-103.58l-230.33-90.852 226.44-89.169c92.185-35.367 51.528-110.67 18.032-110.67z" style="fill-rule:evenodd;paint-order:stroke fill markers;stroke-width:1.2701"/></svg>`;
  footer.appendChild(logo);

  // Logo squeak
  const logoImage = document.getElementById('logo');
  const logoPath = document.getElementById('logo-path');

  if (!logoImage || !logoPath) return;

  logoImage.addEventListener('click', (event) => {
    event.stopPropagation();
    const hoverColor = generateNewColor(colors, logoPath, 'fill').rgb;
    logoPath.style.fill = `rgb(${hoverColor})`;
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
