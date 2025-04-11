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

import './buttons.scss';

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
      ? '2px solid white'
      : '2px solid transparent';
  };

  window.addEventListener('scroll', handleScroll);
}
