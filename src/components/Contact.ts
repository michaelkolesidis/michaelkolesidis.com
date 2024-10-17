// https://michaelkolesidis.com
// Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

export default function contact() {
  const contact = document.getElementById('contact');

  if (contact != null) {
    // Contact Title
    const contactTitle = document.createElement('div');
    contactTitle.classList.add('wavy');
    contactTitle.innerHTML = /* html */ `   
     <span style="--i:1">C</span>
     <span style="--i:2">O</span>
     <span style="--i:3">N</span>
     <span style="--i:4">T</span>
     <span style="--i:5">A</span>
     <span style="--i:6">C</span>
     <span style="--i:7">T</span>`;
    contact.appendChild(contactTitle);

    // Email
    const email = document.createElement('p');
    email.setAttribute('id', 'email');
    email.innerHTML = `For inquiries please drop me a line at:<br>michael.kolesidis@gmail.com`;
    contact.appendChild(email);

    // GitHub
    const github = document.createElement('a');
    github.setAttribute('id', 'github');
    github.innerHTML = /* html */ `
        <span>G</span>
        <span>I</span>
        <span>T</span>
        <span>H</span>
        <span>U</span>
        <span>B</span>
   `;
    github.href = 'https://github.com/michaelkolesidis';
    github.target = '_blank';
    contact.appendChild(github);

    // LinkedIn
    const linkedin = document.createElement('a');
    linkedin.setAttribute('id', 'linkedin');
    linkedin.innerHTML = /* html */ `
        <span>L</span>
        <span>I</span>
        <span>N</span>
        <span>K</span>
        <span>E</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
  `;
    linkedin.href = 'https://www.linkedin.com/in/michaelkolesidis/';
    linkedin.target = '_blank';
    contact.appendChild(linkedin);

    // Twitter
    const twitter = document.createElement('a');
    twitter.setAttribute('id', 'twitter');
    twitter.innerHTML = /* html */ `
        <span>T</span>
        <span>W</span>
        <span>I</span>
        <span>T</span>
        <span>T</span>
        <span>E</span>
        <span>R</span>
  `;
    twitter.href = 'https://twitter.com/michael_kol_';
    twitter.target = '_blank';
    contact.appendChild(twitter);
  }
}
