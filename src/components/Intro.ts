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
    handwritingText.innerHTML = /* html */ `⤺ Use it for<br> 
                                              &nbsp;&nbsp;&nbsp;
                                              debugging`;
    handwriting.appendChild(handwritingText);
    intro.appendChild(handwriting);
    handwritingText.addEventListener('click', () => {
      duckDebuggingWindow.style.opacity = '100';
      duckDebuggingWindow.style.pointerEvents = 'all';
    });

    // Window
    const duckDebuggingWindow = document.createElement('div');
    duckDebuggingWindow.setAttribute('id', 'duck-window');
    duckDebuggingWindow.innerHTML = /* html */ `
    When programmers try to find bugs, 
    it helps to explain their code line-by-line to an inanimate object. 
    This is known as rubber duck debugging.`;

    const duckDebuggingWindowTitle = document.createElement('div');
    duckDebuggingWindowTitle.setAttribute('id', 'window-title');
    duckDebuggingWindowTitle.innerHTML = `Rubber Duck Debugging`;
    duckDebuggingWindow.appendChild(duckDebuggingWindowTitle);

    handwriting.appendChild(duckDebuggingWindow);

    // Window X Button
    const closeButton = document.createElement('button');
    closeButton.classList.add('remove-button');
    closeButton.textContent = '✕';
    closeButton.addEventListener('click', () => {
      handwritingText.style.pointerEvents = 'none';
      duckDebuggingWindow.style.opacity = '0';

      setTimeout(() => {
        duckDebuggingWindow.style.display = 'none';
        handwriting.removeChild(duckDebuggingWindow);
      }, 500);
    });
    duckDebuggingWindow.appendChild(closeButton);

    dragElement(duckDebuggingWindow);
    duckDebuggingWindow.style.zIndex = windowManager.base;
    duckDebuggingWindow.addEventListener('mousedown', () => {
      duckDebuggingWindow.style.zIndex = windowManager.moveOnTop();
    });

    // What Am I (paragraph on the right)
    const whatami = document.createElement('p');
    whatami.setAttribute('id', 'right');
    whatami.innerHTML = /* html */ `I am a designer guided by simplicity and purpose, striving to create meaningful experiences that reflect our shared humanity — design that understands, connects, and enriches the world for a kinder future.`;
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
