// Copyright (c) 2022 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

export function scrollDisplay(target: HTMLElement, scrollDistance: number) {
  // When the user scrolls down the given distance from the top of the document, show the HTML element
  if (document.body.scrollTop > scrollDistance || document.documentElement.scrollTop > scrollDistance) {
    target.style.display = "block";
  } else {
    target.style.display = "none";
  }
}

export function topFunction() {
  // When the user clicks on the button, scroll to the top of the document
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
