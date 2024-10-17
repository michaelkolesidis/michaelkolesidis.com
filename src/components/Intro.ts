import { WindowManager, dragElement } from 'dom-window-manager';

let windowManager = new WindowManager(3);

export default function intro() {
  const intro = document.getElementById('intro');

  if (intro != null) {
    // Who Am I (paragraph on the left)
    const whoami = document.createElement('p');
    whoami.setAttribute('id', 'left');
    whoami.innerHTML = `I'm Michael Kolesidis.<br>(as you might have already guessed from the huge heading)`;
    intro.appendChild(whoami);

    // Handwriting
    const handwriting = document.createElement('div');
    handwriting.setAttribute('id', 'handwriting');
    const handwritingText = document.createElement('p');
    handwritingText.innerHTML = /* html */ `⤺ I use it for<br> 
                                              &nbsp;&nbsp;&nbsp;
                                              debugging`;
    handwriting.appendChild(handwritingText);
    intro.appendChild(handwriting);
    handwritingText.addEventListener('click', () => {
      duckDebuggingModal.style.opacity = '100';
      duckDebuggingModal.style.pointerEvents = 'all';
    });

    // Modal
    const duckDebuggingModal = document.createElement('div');
    duckDebuggingModal.setAttribute('id', 'duck-modal');
    duckDebuggingModal.innerHTML = /* html */ `
    When programmers try to find bugs, 
    it helps to explain their code line-by-line to an inanimate object. 
    This is known as rubber duck debugging.`;

    const duckDebuggingModalTitle = document.createElement('div');
    duckDebuggingModalTitle.setAttribute('id', 'duck-modal-title');
    duckDebuggingModalTitle.innerHTML = `Rubber Duck Debugging`;
    duckDebuggingModal.appendChild(duckDebuggingModalTitle);

    handwriting.appendChild(duckDebuggingModal);

    // Modal X Button
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.textContent = '✕';
    removeButton.addEventListener('click', () => {
      handwritingText.style.pointerEvents = 'none';
      duckDebuggingModal.style.opacity = '0';

      setTimeout(() => {
        duckDebuggingModal.style.display = 'none';
        handwriting.removeChild(duckDebuggingModal);
      }, 500);
    });
    duckDebuggingModal.appendChild(removeButton);

    dragElement(duckDebuggingModal);
    duckDebuggingModal.style.zIndex = windowManager.base;
    duckDebuggingModal.addEventListener('mousedown', () => {
      duckDebuggingModal.style.zIndex = windowManager.moveOnTop();
    });

    // What Am I (paragraph on the right)
    const whatami = document.createElement('p');
    whatami.setAttribute('id', 'right');
    whatami.innerHTML = /* html */ `I am a Visual Storyteller, a Web Developer and Designer. I strive to create narratives that reflect of our shared human experiences, exploring themes of connection and understanding, playing my part in shaping the future of the web.`;
    intro.appendChild(whatami);

    // Scroll prompt
    const scrollPrompt = document.createElement('div');
    scrollPrompt.setAttribute('id', 'scroll-prompt');
    scrollPrompt.innerHTML = `SCROLL DOWN FOR MORE • SCROLL DOWN FOR MORE • SCROLL DOWN FOR MORE • SCROLL DOWN FOR MORE • SCROLL DOWN FOR MORE • SCROLL DOWN FOR MORE`;

    setTimeout(() => {
      if (document.documentElement.scrollTop === 0) {
        intro.appendChild(scrollPrompt);

        const flash = setInterval(
          () => (scrollPrompt.hidden = !scrollPrompt.hidden),
          700
        );

        setTimeout(() => {
          clearInterval(flash);
          scrollPrompt.hidden = true;
        }, 5000);
      }
    }, 20000);
  }
}
