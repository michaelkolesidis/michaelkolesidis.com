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

// Generates a new color from a predefined array of colors, with optional exclusions
export const generateNewColor = (
  colors: any,
  element: any,
  property: string,
  excludeColors: string[] = []
) => {
  const oldColor = element.style[property];

  let num = 0;
  let newColor: string;
  let isColorNew = false;

  while (!isColorNew) {
    num = Math.floor(Math.random() * colors.length);
    newColor = `rgb(${colors[num].rgb})`;

    if (newColor !== oldColor && !excludeColors.includes(newColor)) {
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

export const fancyConsoleLog = (): void => {
  console.log(
    `%c👋 Dev by Michael Kolesidis https://michaelkolesidis.com`,
    'color:#fff;font-size:16px; padding:0.45rem 0.75rem; margin: 0.3rem auto 1.3rem auto; font-family: Metropolis, Helvetica, sans-serif; border: 2px solid #0dd8d8; border-radius: 4px;font-weight: 100;background-size: cover;background-repeat: no-repeat;border: double 4px transparent;background-image: linear-gradient(#000, #122), radial-gradient(circle at top left, #ff90e8, #ffc900);background-origin: border-box;background-clip: padding-box, border-box;'
  );
};
