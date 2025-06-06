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

import './style/style.scss';
import body from './sections/body/Body.js';
import ticker from './components/ticker/Ticker.js';
import header from './sections/header/Header.js';
import intro from './sections/intro/Intro.js';
import projects from './sections/projects/Projects.js';
import contact from './sections/contact/Contact.js';
import about from './sections/about/About.js';
import awards from './sections/awards/Awards.js';
import thisWebsite from './sections/this-website/ThisWebsite.js';
import footer from './sections/footer/Footer.js';
import topButton from './components/buttons/TopButton.js';
import {
  getScrollDistanceCss,
  disableRightClick,
  // animateTitle,
  fancyConsoleLog,
} from './utils/functions.js';

// Components
body();
ticker();
header();
intro();
projects();
contact();
about();
awards();
thisWebsite();
footer();
topButton();

// Global Functions
disableRightClick(); // Disable right click
getScrollDistanceCss(); // Get scroll distance as a CSS variable
// animateTitle(); // Animate page title, disabled for better analytics
fancyConsoleLog(); // Fancy console log

// Debugging
// window.addEventListener('resize', () => {
//   console.log(window.innerWidth);
// });
