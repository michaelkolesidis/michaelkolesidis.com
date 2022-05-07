// © 2022 Michael Kolesidis. All rights reserved.
// michael.kolesidis@gmail.com

export default function intro() {
  const intro = document.getElementById("intro");

  let whoami = document.createElement("p");
  whoami.innerText = `I'm Michael Kolesidis.(as you might have already guessed from the huge heading)`;
  intro.appendChild(whoami);

  let whatami = document.createElement("p");
  whatami.setAttribute("id", "right");

  whatami.innerText = `I am a Front-End Web Developer with a diverse background in computer science, economics and the arts. I enjoy being creative and curious, learning and building new, exciting things every day. I am passiotate with front-end development and I aim at creating web experiences that are both functional and beautiful.`;
  intro.appendChild(whatami);
}
