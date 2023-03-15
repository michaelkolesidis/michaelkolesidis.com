// https://michaelkolesidis.com
// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import "./style/style.scss";
import body from "./components/Body.js";
import ticker from "./components/Ticker.js";
import header from "./components/Header.js";
import intro from "./components/Intro.js";
import projects from "./components/Projects.js";
import contact from "./components/Contact.js";
import about from "./components/About.js";
import awards from "./components/Awards.js";
import thisWebsite from "./components/ThisWebsite.js";
import footer from "./components/Footer.js";
import topButton from "./components/TopButton.js";
import { getScrollDistanceCss } from "./utils/functions.js";
import { disableRightClick } from "./utils/functions.js";

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
