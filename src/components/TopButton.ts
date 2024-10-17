export default function topButton() {
  const topButton = document.getElementById('top-button');

  const scrollFunction = (target: HTMLElement, scrollDistance: number) => {
    // When the user scrolls down the given distance from the top of the document, show the HTML element
    if (
      document.body.scrollTop > scrollDistance ||
      document.documentElement.scrollTop > scrollDistance
    ) {
      target.style.opacity = '1';
      target.style.pointerEvents = 'all';
    } else {
      target.style.opacity = '0';
      target.style.pointerEvents = 'none';
    }
  };

  const topFunction = () => {
    // When the user clicks on the button, scroll to the top of the document
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  if (topButton != null) {
    topButton.innerHTML = 'TOP';

    // When the user clicks on the button, scroll to the top of the document
    topButton.addEventListener('click', () => {
      topFunction();
    });

    // When the user scrolls down the given distance from the top of the document, show the button
    window.onscroll = () => {
      scrollFunction(topButton, 300);

      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 500
      ) {
        topButton.style.border = `4px solid white`;
      } else {
        topButton.style.border = `4px solid transparent`;
      }
    };
  }
}
