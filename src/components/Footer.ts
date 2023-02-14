// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

export default function footer() {
  const footer = document.getElementById("footer");

  if (footer != null) {
    // Copyright
    let copyright = document.createElement("p");
    // copyright.innerText = `© 2023 Michael Kolesidis`;
    footer.appendChild(copyright);
  }
}
