/*****************************************/
/* The component is not currently in use */
/*****************************************/

export default function technologies() {
  const technologies = document.getElementById('contact');
  if (technologies != null) {
    // Title
    const technologiesTitle = document.createElement('div');
    technologiesTitle.classList.add('wavy');
    technologiesTitle.innerHTML = `   
      <span style="--i:1">T</span>
      <span style="--i:2">E</span>
      <span style="--i:3">C</span>
      <span style="--i:4">H</span>
      <span style="--i:5"> </span>
      <span style="--i:6">S</span>
      <span style="--i:7">T</span>
      <span style="--i:8">A</span>
      <span style="--i:9">C</span>
      <span style="--i:9">K</span>`;
    technologies.appendChild(technologiesTitle);
  }
}
