// © 2022 Michael Kolesidis. All rights reserved.
// michael.kolesidis@gmail.com

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
    </div>
</main>
<footer id="footer"></footer>
<div id="overlay"></div>
`;
}
