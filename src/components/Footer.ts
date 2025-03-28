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

export default function footer() {
  const footer = document.getElementById('footer');
  if (!footer) return;

  // Copyright
  const copyright = document.createElement('p');
  copyright.id = 'copyright';
  copyright.textContent = '© Michael Kolesidis';
  footer.appendChild(copyright);

  // Desktop prompt (mobile view)
  if (window.innerWidth < 700) {
    const desktopPrompt = document.createElement('p');
    desktopPrompt.id = 'desktop-prompt';
    desktopPrompt.textContent =
      'If you liked my website, visit it from your desktop/laptop for the full experience!';
    footer.appendChild(desktopPrompt);
  }

  // Disclaimer
  const disclaimer = document.createElement('p');
  disclaimer.id = 'disclaimer';
  disclaimer.innerHTML = `For a minimal and accessible for people with color blindness version of this website, please click <a href="https://michaelkolesidis.com/minimal/" target="_blank">here</a>.`;
  footer.appendChild(disclaimer);

  // Duck SVG
  const duck = document.createElement('div');
  duck.innerHTML = /* html */ `
  <svg id="duck" version="1.1" viewBox="0 0 22.723 20.862" xmlns="http://www.w3.org/2000/svg">
  <path d="m7.9465 0.022017c-0.22997 0.0264-0.48802 0.078-0.80235 0.16037-1.0232 0.26811-1.9512 0.90317-2.6118 1.7872-0.41157 0.5509-0.6444 1.0172-0.87813 1.7587-0.0978 0.31013-0.0978 0.31013-0.42596 0.46827-0.75593 0.36431-1.6087 0.58113-2.5972 0.66046-0.24501 0.0197-0.46789 0.0452-0.49529 0.0567-0.0892 0.0376-0.1358 0.22889-0.1358 0.55779 0 0.27845 3e-3 0.29631 0.0746 0.44752 0.23999 0.50667 0.8298 0.82484 2.1339 1.1511 0.72517 0.18144 1.1845 0.26301 1.759 0.31248 0.23585 0.0203 0.37657 0.0435 0.43657 0.0721 0.16997 0.0808 0.64382 0.64951 0.79685 0.95635 0.10202 0.20454 0.111 0.37584 0.0319 0.60895-0.10991 0.32387-0.31902 0.57071-1.0308 1.2166-0.50858 0.46158-0.80978 0.78095-1.0838 1.1491-0.44637 0.59986-0.7573 1.3205-0.86177 1.9975-0.0659 0.42681-0.0719 1.3171-0.0111 1.6473 0.43909 2.3858 2.6478 4.4849 5.6299 5.3508 1.1939 0.34663 2.2488 0.48278 3.7255 0.48083 1.8982-3e-3 3.49-0.23505 4.9767-0.72702 2.8614-0.94684 4.7837-2.809 5.6579-5.4807 0.25939-0.79278 0.40257-1.5341 0.46939-2.4306 0.0358-0.47974 0.0143-1.9998-0.0351-2.4833-0.10585-1.0364-0.26204-1.7754-0.45719-2.1631-0.0916-0.18185-0.14441-0.21262-0.33997-0.19782-0.19852 0.015-0.38735 0.0979-1.2581 0.55204-0.72301 0.37712-1.11 0.55906-1.5962 0.75057-1.8076 0.71194-3.9923 1.013-5.4911 0.75681-0.52626-0.09-0.97899-0.27726-1.203-0.49767-0.17564-0.17288-0.21292-0.26035-0.21306-0.50014-1.4e-4 -0.24633 0.0246-0.30157 0.45725-1.0209 0.56696-0.94258 0.7145-1.3086 0.8231-2.0417 0.0303-0.20415 0.0398-0.43301 0.0408-0.97446 1e-3 -0.65937-2e-3 -0.72426-0.053-0.95127-0.20279-0.91087-0.58048-1.6072-1.187-2.1884-0.53217-0.50997-1.1952-0.8638-2.0096-1.0725-0.37301-0.0956-0.71066-0.14093-1.2851-0.17251-0.4874-0.0268-0.70196-0.0262-0.95126 2e-3m-1.7517 2.8021c-0.21019 0.0544-0.41151 0.23415-0.51786 0.46234-0.0546 0.1171-0.0614 0.16009-0.0618 0.38695-3.7e-4 0.23898 4e-3 0.26511 0.0733 0.4107 0.17921 0.37825 0.54871 0.56301 0.83447 0.41723 0.31927-0.1629 0.51767-0.58442 0.45449-0.96567-0.0762-0.45997-0.44811-0.79811-0.78256-0.71155" fill="#ffffff" fill-rule="evenodd" stroke-width=".023202"/>
  </svg>
  `;
  footer.appendChild(duck);

  // Duck squeak
  const duckImage = document.getElementById('duck');
  if (!duckImage) return;

  duckImage.addEventListener('click', (event) => {
    event.stopPropagation();
    const squeak = new Audio('../../assets/sounds/squeak.mp3');
    squeak.playbackRate = 1.35;
    squeak.play();
  });
}
