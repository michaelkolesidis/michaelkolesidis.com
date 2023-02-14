// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

export default function body() {
  document.body.innerHTML = /*html*/ `   
<div class="ticker-wrap"><div class="ticker"></div></div>
<header id="header"></header>
<main id="main">
    <div id="sketch-placeholder"></div>
    <div id="p5_loading" class="loadingclass">LOADING</div>
    <div id="intro"></div>
    <div id="main-content">
    <section id="projects"></section>
    <section id="contact"></section>
    <section id="about"></section>
    <section id="this-website"></section>
    </div>
</main>
<footer id="footer"></footer>
<div id="top-button"></div>
<div id="overlay"></div>
`;
}
