// © 2022 Michael Kolesidis. All rights reserved.
// michael.kolesidis@gmail.com

export default function header() {
  const header = document.getElementById("header");

  // Name
  let name = document.createElement("h1");
  name.setAttribute("id", "name");

  let nameLink = document.createElement("a");

  let nameText = document.createTextNode("MICHAEL KOLESIDIS");
  nameLink.appendChild(nameText);

  nameLink.title = "Michael Kolesidis";
  nameLink.href = "https://michaelkolesidis.com";

  name.appendChild(nameLink);
  header.appendChild(name);

  // Menu button
  let menuButton = document.createElement("h1");
  menuButton.setAttribute("id", "menu-button");
  menuButton.innerText = `MENU`;

  header.appendChild(menuButton);
}
