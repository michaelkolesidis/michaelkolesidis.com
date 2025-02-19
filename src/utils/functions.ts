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
  const message = 'MICHAEL KOLESIDIS';
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
