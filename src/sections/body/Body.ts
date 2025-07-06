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

export default function body() {
  document.body.innerHTML += /*html*/ `   
    <div class="overlay"></div>
    <div class="ticker-wrap"><div class="ticker"></div></div>
    <header id="header"></header>
    <main id="main">
        <div id="duck-placeholder"></div>
        <div id="intro"></div>
        <div id="main-content">
          <section id="projects" class="section"></section>
          <section id="contact" class="section"></section>
          <section id="about" class="section"></section>
          <section id="awards" class="section"></section>
          <section id="this-website" class="section"></section>
        </div>
    </main>
    <footer id="footer"></footer>
    <div id="top-button"></div>
    <div id="sound-button"></div>
`;
}
