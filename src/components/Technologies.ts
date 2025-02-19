/*****************************************/
/* The component is not currently in use */
/*****************************************/

export default function technologies() {
  const technologies = document.getElementById('contact');
  if (!technologies) return;

  const titleText = 'TECH STACK';
  const technologiesTitle = document.createElement('div');
  technologiesTitle.classList.add('wavy');
  technologiesTitle.innerHTML = [...titleText]
    .map((char, i) => `<span style="--i:${i + 1}">${char}</span> `)
    .join('');
  technologies.appendChild(technologiesTitle);
}
