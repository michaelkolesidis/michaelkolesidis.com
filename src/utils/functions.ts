/*
 *  Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 *  ATTENTION! FREE SOFTWARE
 *  This website is free software (free as in freedom).
 *  If you use any part of this code, you must make your entire project's source code
 *  publicly available under the same license. This applies whether you modify the code
 *  or use it as it is in your own project. This ensures that all modifications and
 *  derivative works remain free software, so that everyone can benefit.
 *  If you are not willing to comply with these terms, you must refrain from using any part of this code.
 *
 *  For full license terms and conditions, you can read the AGPL-3.0 here:
 *  https://www.gnu.org/licenses/agpl-3.0.html
 */

// Generates a new color from a predefined array of colors
export const generateNewColor = (
  colors: any,
  element: any,
  property: string
) => {
  const oldColor = element.style[property];

  let num = 0;
  let newColor: string;
  let isColorNew = false;

  while (!isColorNew) {
    num = Math.floor(Math.random() * colors.length);
    newColor = `rgb(${colors[num].rgb})`;

    if (oldColor !== newColor) {
      isColorNew = true;
    }
  }

  return colors[num];
};

// Get scroll distance as a CSS variable
export const getScrollDistanceCss = (): void => {
  window.addEventListener('scroll', () => {
    const scrollPercentage =
      window.scrollY / (document.body.offsetHeight - window.innerHeight);
    document.body.style.setProperty('--scroll', scrollPercentage.toString());
  });
};

export const disableRightClick = (): void => {
  document.addEventListener('contextmenu', (e) => e.preventDefault());
};

// Animate page title with a scrolling effect
export const animateTitle = (): void => {
  const message = 'Michael Kolesidis';
  let position = 0;
  let forward = true;

  const updateTitle = () => {
    document.title = forward
      ? message.substring(0, ++position)
      : message.substring(message.length - --position);

    // Toggle direction at the beginning or end of the message
    if (position === message.length || position === 0) forward = !forward;

    setTimeout(updateTitle, 200);
  };

  document.addEventListener('DOMContentLoaded', updateTitle);
};
