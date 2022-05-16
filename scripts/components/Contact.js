// © 2022 Michael Kolesidis. All rights reserved.
// michael.kolesidis@gmail.com

export default function contact() {
  const contact = document.getElementById("contact");

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

  email.innerText = `Like what you see? For business enquiries please drop me a line at:
    michael.kolesidis@gmail.com`;
  contact.appendChild(email);

  // Links
  let cv = document.createElement("a");
  let cvText = document.createTextNode("CV");
  cv.appendChild(cvText);
  cv.title = "CV";
  cv.href = "./assets/cv/michael-kolesidis-cv-3-1.pdf";
  cv.target = "_blank";
  contact.appendChild(cv);

  contact.innerHTML += "<br>";

  let github = document.createElement("a");
  let githubText = document.createTextNode("GitHub");
  github.appendChild(githubText);
  github.title = "GitHub";
  github.href = "https://github.com/michaelkolesidis";
  github.target = "_blank";
  contact.appendChild(github);

  contact.innerHTML += "<br>";

  let linkedin = document.createElement("a");
  let linkedinText = document.createTextNode("LinkedIn");
  linkedin.appendChild(linkedinText);
  linkedin.title = "my title text";
  linkedin.href = "https://www.linkedin.com/in/michaelkolesidis/";
  linkedin.target = "_blank";
  contact.appendChild(linkedin);

  contact.innerHTML += "<br>";
}
