export default function body() {
  // The structure of the HTML body
  document.body.innerHTML = /*html*/ `   
      <div class="ticker-wrap"><div class="ticker"></div></div>
      <header id="header"></header>
      <main id="main">
          <div id="sketch-placeholder"></div>
          <div id="p5_loading" class="loadingclass">
            <div><div>LOADING</div></div>
          </div>
          <div id="intro"></div>
          <div id="main-content">
            <section id="projects"></section>
            <section id="contact"></section>
            <section id="about"></section>
            <section id="awards"></section>
            <section id="this-website"></section>
          </div>
      </main>
      <footer id="footer"></footer>
      <div id="top-button"></div>
      <div id="sound-button"></div>
      <div id="overlay"></div>
`;
}

// <div class="overlay"></div>
