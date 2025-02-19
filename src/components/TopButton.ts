export default function topButton() {
  const topButton = document.getElementById('top-button');
  if (!topButton) return;
  topButton.textContent = 'TOP';

  // Scroll to top on button click
  topButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Show/hide button on scroll
  const handleScroll = () => {
    const scrollDistance = 300;
    const nearBottomThreshold = 500;

    // Toggle button visibility
    const scrolled = document.documentElement.scrollTop;
    topButton.style.opacity = scrolled > scrollDistance ? '1' : '0';
    topButton.style.pointerEvents = scrolled > scrollDistance ? 'all' : 'none';

    // Toggle border when near the bottom
    const nearBottom =
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - nearBottomThreshold;
    topButton.style.border = nearBottom
      ? '4px solid white'
      : '4px solid transparent';
  };

  window.addEventListener('scroll', handleScroll);
}
