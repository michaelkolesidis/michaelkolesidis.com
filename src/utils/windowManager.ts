// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

let instance: any = null;

export class WindowManager {
  // base z-index to be used as the initial value of all elements
  base!: string;
  // highest z-index amongst all elements
  highZ!: string;

  constructor(base = 1) {
    if (instance) {
      return instance;
    }

    instance = this;

    this.base = base.toString();
    this.highZ = this.base;
  }

  // move elements on top of all other elements
  moveOnTop() {
    let newHigh = parseInt(this.highZ) + 1;
    this.highZ = newHigh.toString();
    return newHigh.toString();
  }
}

// make element draggable
export function dragElement(element: any) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  element.onmousedown = dragMouseDown;

  function dragMouseDown(e: any) {
    e = e || window.event; // for IE
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e: any) {
    e = e || window.event; // for IE
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // Set the element's new position:
    element.style.top = element.offsetTop - pos2 + "px";
    element.style.left = element.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
