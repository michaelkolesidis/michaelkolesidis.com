// https://michaelkolesidis.com
// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

// Generates a new color from a predefined palette (array) of colors
export const generateNewColor = (
  colors: any,
  element: any,
  property: string
) => {
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
};

// Get scroll distance as a CSS variable
export const getScrollDistanceCss = () => {
  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        (
          window.pageYOffset /
          (document.body.offsetHeight - window.innerHeight)
        ).toString()
      );
    },
    false
  );
};

// Disable right click
export const disableRightClick = () => {
  document.addEventListener("contextmenu", (e) => e.preventDefault());
};
