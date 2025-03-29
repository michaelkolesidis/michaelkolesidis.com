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

export default function contact() {
  const contact = document.getElementById('contact');
  if (!contact) return;

  // Contact Title
  const titleText = 'CONTACT';
  const contactTitle = document.createElement('div');
  contactTitle.classList.add('wavy');
  contactTitle.innerHTML = [...titleText]
    .map((char, i) => `<span style="--i:${i + 1}">${char}</span> `)
    .join('');
  contact.appendChild(contactTitle);

  // Email
  const email = document.createElement('p');
  email.id = 'email';
  email.innerHTML = `For inquiries, please drop me a line at:<br>michael.kolesidis@gmail.com`;
  contact.appendChild(email);

  // Socials
  const socials = document.createElement('div');
  socials.id = 'socials';

  const socialLinks = [
    { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/michaelkolesidis/' },
    { name: 'MASTODON', url: 'https://mastodon.social/@michaelkolesidis' },
    {
      name: 'BLUESKY',
      url: 'https://bsky.app/profile/michaelkolesidis.bsky.social',
    },
    { name: 'INSTAGRAM', url: 'https://www.instagram.com/michaelkolesidis' },
    { name: 'GITHUB', url: 'https://github.com/michaelkolesidis' },
    { name: 'X/TWITTER', url: 'https://twitter.com/michael_kol_' },
  ];

  socialLinks.forEach(({ name, url }) => {
    const link = document.createElement('a');
    link.classList.add('social');
    link.href = url;
    link.target = '_blank';
    link.innerHTML = `<span>${name} </span> `;
    socials.appendChild(link);
  });

  contact.appendChild(socials);
}
