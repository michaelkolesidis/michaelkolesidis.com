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

import { generateNewColor } from '../utils/functions.js';
import { colors } from '../data/colors.js';
import { awardList } from '../data/awards.js';

export default function awards() {
  const awards = document.getElementById('awards');
  if (!awards) return;

  // Contact Title
  const awardsTitle = document.createElement('div');
  awardsTitle.id = 'awards-title';
  awardsTitle.classList.add('wavy');
  awardsTitle.innerHTML = [...'CASUAL AWARDS']
    .map((letter, i) => `<span style="--i:${i + 1}">${letter}</span> `)
    .join('');
  awards.appendChild(awardsTitle);

  const awardsContainer = document.createElement('div');
  awardsContainer.setAttribute('id', 'awards-container');

  awards.appendChild(awardsContainer);

  // Ppopulate
  for (const awa of awardList) {
    // Award
    const award = document.createElement('div');
    award.setAttribute('id', 'award');

    // X
    const awardX = document.createElement('div');
    awardX.classList.add('award-x');
    awardX.innerHTML = `${awa.plaque}`;
    award.appendChild(awardX);

    /* Styling */
    if (colors[1]) awardX.style.color = `rgb(${colors[1].rgb})`;
    awardX.style.textShadow = `
       -2px -2px rgb(0, 0, 0),
       -1px -1px rgb(0, 0, 0),
        1px 1px rgb(0, 0, 0),
        2px 2px rgb(0, 0, 0), 
        3px 3px rgb(0, 0, 0), 
        4px 4px rgb(0, 0, 0), 
        5px 5px rgb(0, 0, 0), 
        6px 6px rgb(0, 0, 0), 
        7px 7px rgb(0, 0, 0), 
        8px 8px rgb(0, 0, 0), 
        9px 9px rgb(0, 0, 0), 
        10px 10px rgb(0, 0, 0), 
        11px 11px rgb(0, 0, 0), 
        12px 12px rgb(0, 0, 0), 
        13px 13px rgb(0, 0, 0)
        `;

    awardX.addEventListener('click', () => {
      awardX.style.color = `rgb(${
        generateNewColor(colors, awardX, 'color').rgb
      })`;
    });

    // Award Details
    const awardDetails = document.createElement('div');
    awardDetails.classList.add('award-details');
    award.appendChild(awardDetails);

    // Award Title
    let titleContent = '';
    for (let i = 0; i < awa.title.length; i++) {
      titleContent += `<span>${awa.title[i]}</span>`;
    }
    const title = document.createElement('a');
    title.classList.add('award-title');
    title.href = `${awa.link}`;
    title.target = '_blank';
    title.innerHTML = titleContent;
    awardDetails.appendChild(title);

    // Awarder
    let awarderContent = '';
    for (let i = 0; i < awa.awarder.length; i++) {
      awarderContent += `<span>${awa.awarder[i]}</span>`;
    }
    const awarder = document.createElement('a');
    awarder.classList.add('award-awarder');
    awarder.href = `${awa.awarderLink}`;
    awarder.target = '_blank';
    awarder.innerHTML = `<br>${awarderContent}`;
    awardDetails.appendChild(awarder);

    // Description
    const summary = document.createElement('p');
    summary.classList.add('award-description');
    summary.innerHTML = `${awa.description}`;
    awardDetails.appendChild(summary);

    awardsContainer.appendChild(award);
  }
}
