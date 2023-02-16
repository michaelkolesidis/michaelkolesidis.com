// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

export default function technologies() {
  const technologies = document.getElementById("contact");
  if (technologies != null) {
    // Title
    const technologiesTitle = document.createElement("div");
    technologiesTitle.classList.add("wavy");
    technologiesTitle.innerHTML = `   
      <span style="--i:1">T</span>
      <span style="--i:2">E</span>
      <span style="--i:3">C</span>
      <span style="--i:4">H</span>
      <span style="--i:5"> </span>
      <span style="--i:6">S</span>
      <span style="--i:7">T</span>
      <span style="--i:8">A</span>
      <span style="--i:9">C</span>
      <span style="--i:9">K</span>`;
    technologies.appendChild(technologiesTitle);
  }
}
