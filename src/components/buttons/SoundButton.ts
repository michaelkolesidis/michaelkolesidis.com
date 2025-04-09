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

// import './buttons.scss';
// import { Howl } from 'howler';

// export default function soundButton() {
//   const soundButton = document.getElementById('sound-button');
//   if (!soundButton) return;

//   let soundtrackStarted = false;
//   let soundtrackPlaying = false;

//   let soundtrack = new Howl({
//     src: ['../../assets/music/soundtrack.mp3'],
//     autoplay: false,
//     loop: true,
//     volume: 0.5,
//   });

//   document.addEventListener('click', function () {
//     if (
//       soundtrackStarted ||
//       /Mobi|Android/i.test(navigator.userAgent) ||
//       window.innerWidth <= 700
//     ) {
//       return;
//     }

//     soundtrack.play();
//     soundtrackStarted = true;
//     soundtrackPlaying = true;

//     soundButton.innerHTML = `<img alt=Smiley" src="../../assets/speaker.svg" />`;
//     soundButton.style.opacity = '100';

//     setTimeout(() => {
//       soundButton.style.opacity = '0';
//     }, 15000);

//     setTimeout(() => {
//       soundButton.style.display = 'none';
//     }, 16000);

//     soundButton.addEventListener('click', () => {
//       if (soundtrackPlaying) {
//         soundtrack.pause();
//         soundButton.style.opacity = '0';

//         setTimeout(() => {
//           soundButton.style.display = 'none';
//         }, 1000);
//       }
//     });
//   });
// }
