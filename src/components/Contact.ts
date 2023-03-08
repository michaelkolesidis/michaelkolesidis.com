// https://michaelkolesidis.com
// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

export default function contact() {
  const contact = document.getElementById("contact");

  if (contact != null) {
    // Contact Title
    const contactTitle = document.createElement("div");
    contactTitle.classList.add("wavy");
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
    const email = document.createElement("p");
    email.setAttribute("id", "email");
    email.innerHTML = `For inquiries please drop me a line at:<br>michael.kolesidis@gmail.com`;
    contact.appendChild(email);

    // Links
    contact.innerHTML += "<br>";

    // GitHub
    const github = document.createElement("a");
    github.setAttribute("id", "github");
    github.innerHTML = /* html */ `
        <span>G</span>
        <span>i</span>
        <span>t</span>
        <span>H</span>
        <span>u</span>
        <span>b</span>
   `;
    // github.title = "GitHub";
    github.href = "https://github.com/michaelkolesidis";
    github.target = "_blank";
    contact.appendChild(github);

    contact.innerHTML += "<br>";

    // LinkedIn
    const linkedin = document.createElement("a");
    linkedin.setAttribute("id", "linkedin");
    linkedin.innerHTML = /* html */ `
        <span>L</span>
        <span>i</span>
        <span>n</span>
        <span>k</span>
        <span>e</span>
        <span>d</span>
        <span>I</span>
        <span>n</span>
  `;
    // linkedin.title = "LinkedIn";
    linkedin.href = "https://www.linkedin.com/in/michaelkolesidis/";
    linkedin.target = "_blank";
    contact.appendChild(linkedin);

    contact.innerHTML += "<br>";

    // Stack Overflow
    const stackoverflow = document.createElement("a");
    stackoverflow.setAttribute("id", "stack-overflow");
    stackoverflow.innerHTML = /* html */ `<span>S</span>
        <span>t</span>
        <span>a</span>
        <span>c</span>
        <span>k</span>
        <span>&nbsp;</span>
        <span>O</span>
        <span>v</span>
        <span>e</span>
        <span>r</span>
        <span>f</span>
        <span>l</span>
        <span>o</span>
    <span>w</span>
  `;
    // stackoverflow.title = "Stack Overflow";
    stackoverflow.href =
      "https://stackoverflow.com/users/15253636/michael-kolesidis";
    stackoverflow.target = "_blank";
    contact.appendChild(stackoverflow);
  }
}
