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
import body from './components/Body.js';
import ticker from './components/Ticker.js';
import header from './components/Header.js';
import intro from './components/Intro.js';
import projects from './components/Projects.js';
import contact from './components/Contact.js';
import about from './components/About.js';
import awards from './components/Awards.js';
import thisWebsite from './components/ThisWebsite.js';
import footer from './components/Footer.js';
import topButton from './components/TopButton.js';
import { getScrollDistanceCss } from './utils/functions.js';
import { disableRightClick } from './utils/functions.js';
import { animateTitle } from './utils/functions.js';

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
animateTitle(); // Animate page title
