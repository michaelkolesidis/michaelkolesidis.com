// https://michaelkolesidis.com
// Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import "./style/style.scss";
import body from "./components/Body.js";
import header from "./components/Header.js";
import intro from "./components/Intro.js";
import { getScrollDistanceCss } from "./utils/functions.js";
import { disableRightClick } from "./utils/functions.js";

// Components
body();
// ticker();
header();
intro();
// projects();
// contact();
// about();
// awards();
// thisWebsite();
// footer();
// topButton();

// Global Functions
disableRightClick(); // Disable right click
getScrollDistanceCss(); // Get scroll distance as a CSS variable
