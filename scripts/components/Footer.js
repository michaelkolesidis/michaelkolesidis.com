// © 2022 Michael Kolesidis. All rights reserved.
// michael.kolesidis@gmail.com

export default function footer() {
  const footer = document.getElementById("footer");

  // Copyright
  let copyright = document.createElement("p");
  copyright.innerText = `© 2022 Michael Kolesidis. All rights reserved.`;
  footer.appendChild(copyright);
}
