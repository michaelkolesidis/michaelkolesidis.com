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

import { sentencesThisWebsite as sentences } from '../data/sentences.js';

export default function thisWebsite() {
  const website = document.getElementById('this-website');
  if (!website) return;

  // Title
  const websiteTitle = document.createElement('div');
  websiteTitle.classList.add('wavy');
  websiteTitle.innerHTML = [...'THIS WEBSITE']
    .map((char, i) => `<span style="--i:${12 - i}">${char}</span> `)
    .join('');
  website.appendChild(websiteTitle);

  // Populate sentences
  sentences.forEach((text, index) => {
    const sentence = document.createElement('p');
    if (index === 0) sentence.style.marginRight = 'auto';
    sentence.innerHTML = text;
    website.appendChild(sentence);
  });
}
