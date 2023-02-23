// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

export function scrollFunction(target: HTMLElement, scrollDistance: number) {
  // When the user scrolls down the given distance from the top of the document, show the HTML element
  if (
    document.body.scrollTop > scrollDistance ||
    document.documentElement.scrollTop > scrollDistance
  ) {
    target.style.opacity = "1";
    target.style.pointerEvents = "all";
  } else {
    target.style.opacity = "0";
    target.style.pointerEvents = "none";
  }
}

export function topFunction() {
  // When the user clicks on the button, scroll to the top of the document
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

export function generateNewColor(colors: any, element: any, property: string) {
  const oldColor = element["style"][property];

  let num = 0;
  let isColorNew = false;

  while (isColorNew === false) {
    num = Math.floor(Math.random() * colors.length);
    let newColor = `rgb(${colors[num].rgb})`;

    if (oldColor !== newColor) {
      isColorNew = true;
    }
  }

  return colors[num];
}

// Make element draggable
export function dragElement(elmnt: any) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    //@ts-ignore
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e: any) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e: any) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
