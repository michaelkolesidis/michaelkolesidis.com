// Generates a new color from a predefined palette (array) of colors
export const generateNewColor = (
  colors: any,
  element: any,
  property: string
) => {
  const oldColor = element['style'][property];

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
    'scroll',
    () => {
      document.body.style.setProperty(
        '--scroll',
        (
          window.scrollY /
          (document.body.offsetHeight - window.innerHeight)
        ).toString()
      );
    },
    false
  );
};

// Disable right click
export const disableRightClick = () => {
  document.addEventListener('contextmenu', (e) => e.preventDefault());
};

// Animate page title
export const animateTitle = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const message = 'MICHAEL KOLESIDIS';
    const speed = 200;
    let position = 0;
    let forward = true;

    const updateTitle = () => {
      document.title = forward
        ? message.substring(0, ++position)
        : message.substring(message.length - --position);

      if (position === message.length || position === 0) forward = !forward;

      setTimeout(updateTitle, speed);
    };
    updateTitle();
  });
};
