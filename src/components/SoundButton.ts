import { Howl } from 'howler';

export default function soundButton() {
  const soundButton = document.getElementById('sound-button');

  let soundtrackStarted = false;
  let soundtrackPlaying = false;

  let soundtrack = new Howl({
    src: ['../../assets/music/soundtrack.mp3'],
    autoplay: false,
    loop: true,
    volume: 0.5,
  });

  document.addEventListener('click', function () {
    if (
      soundtrackStarted ||
      /Mobi|Android/i.test(navigator.userAgent) ||
      window.innerWidth <= 700
    ) {
      return;
    }

    soundtrack.play();
    soundtrackStarted = true;
    soundtrackPlaying = true;

    if (soundButton != null) {
      soundButton.innerHTML = `<img alt=Smiley" src="../../assets/speaker.svg" />`;
      soundButton.style.opacity = '100';

      setTimeout(() => {
        soundButton.style.opacity = '0';
      }, 15000);

      setTimeout(() => {
        soundButton.style.display = 'none';
      }, 16000);

      soundButton.addEventListener('click', () => {
        if (soundtrackPlaying) {
          soundtrack.pause();
          soundButton.style.opacity = '0';

          setTimeout(() => {
            soundButton.style.display = 'none';
          }, 1000);
        }
      });
    }
  });
}
