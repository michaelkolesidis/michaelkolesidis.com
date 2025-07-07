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

import { textsContact } from '../../data/texts.js';
import { socialList } from '../../data/social.js';

export default function contact() {
  const contact = document.getElementById('contact');
  if (!contact) return;

  // Contact Title
  const titleText = 'CONTACT';
  const contactTitle = document.createElement('div');
  contactTitle.classList.add('wavy');
  contactTitle.innerHTML = [...titleText]
    .map((char, i) => `<span style="--i:${7 - i}">${char}</span> `)
    .join('');
  contact.appendChild(contactTitle);

  // Project Request paragraph
  const projectRequestParagraph = document.createElement('p');
  projectRequestParagraph.innerHTML = `${textsContact[0]}`;
  contact.appendChild(projectRequestParagraph);

  // Project Request button
  const projectRequest = document.createElement('p');
  projectRequest.id = 'project-request-contact';
  projectRequest.classList.add('project-request');
  projectRequest.innerHTML = `<a href="https://forms.gle/Vg7kH5PRosqU3HYx6" target="_blank">Submit Project Request</a>`;
  contact.appendChild(projectRequest);

  // Email
  const email = document.createElement('p');
  email.id = 'email';
  email.innerHTML = `${textsContact[1]}`;
  contact.appendChild(email);

  // Socials
  const socials = document.createElement('div');
  socials.id = 'socials';

  socialList.forEach(({ name, filename, url }) => {
    const link = document.createElement('a');
    link.classList.add('social');
    link.href = url;
    link.target = '_blank';
    link.innerHTML = `<img src="../../assets/icons/${filename}.svg" class="social-icon-large" alt="${name} logo">`;
    socials.appendChild(link);
  });

  contact.appendChild(socials);
}
