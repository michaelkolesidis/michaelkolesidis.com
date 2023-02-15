// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

export default function contact() {
  const contact = document.getElementById("contact");

  if (contact != null) {
    // Contact Title
    let contactTitle = document.createElement("div");
    contactTitle.classList.add("wavy");
    contactTitle.innerHTML = `   
     <span style="--i:1">C</span>
     <span style="--i:2">O</span>
     <span style="--i:3">N</span>
     <span style="--i:4">T</span>
     <span style="--i:5">A</span>
     <span style="--i:6">C</span>
     <span style="--i:7">T</span>`;
    contact.appendChild(contactTitle);

    // Email
    let email = document.createElement("p");
    email.setAttribute("id", "email");
    email.innerText = `For inquiries please drop me a line at:
   michael.kolesidis@gmail.com`;
    contact.appendChild(email);

    // Links
    contact.innerHTML += "<br>";

    // GitHub
    let github = document.createElement("a");
    github.setAttribute("id", "github");
    github.innerHTML = `GitHub`;
    github.title = "GitHub";
    github.href = "https://github.com/michaelkolesidis";
    github.target = "_blank";
    contact.appendChild(github);

    contact.innerHTML += "<br>";

    // LinkedIn
    let linkedin = document.createElement("a");
    linkedin.setAttribute("id", "linkedin");
    linkedin.innerHTML = `LinkedIn`;
    linkedin.title = "LinkedIn";
    linkedin.href = "https://www.linkedin.com/in/michaelkolesidis/";
    linkedin.target = "_blank";
    contact.appendChild(linkedin);

    contact.innerHTML += "<br>";

    // Stack Overflow
    let stackoverflow = document.createElement("a");
    stackoverflow.innerHTML = `Stack Overflow`;
    stackoverflow.title = "Stack Overflow";
    stackoverflow.href =
      "https://stackoverflow.com/users/15253636/michael-kolesidis";
    stackoverflow.target = "_blank";
    contact.appendChild(stackoverflow);
  }
}
