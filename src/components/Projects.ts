import projectList from '../data/projects.js';
import { populateProjects } from '../utils/populateProjects.js';

export default function projects() {
  const projects = document.getElementById('projects');

  if (projects != null) {
    // Project Title
    const projectsTitle = document.createElement('div');
    projectsTitle.classList.add('wavy');
    projectsTitle.innerHTML = /* html */ `   
        <span style="--i:1">P</span>
        <span style="--i:2">O</span>
        <span style="--i:3">R</span>
        <span style="--i:4">T</span>
        <span style="--i:5">F</span>
        <span style="--i:6">O</span>
        <span style="--i:7">L</span>
        <span style="--i:8">I</span>
        <span style="--i:9">O</span>`;
    projects.appendChild(projectsTitle);

    const projectsContainer = document.createElement('div');
    projectsContainer.setAttribute('id', 'projects-container');
    projects.appendChild(projectsContainer);

    const numberOfProjects = projectList.length;
    const upTo = 8;

    // Ppopulate projects
    populateProjects(0, upTo, projectsContainer);

    // Show More
    const showMore = document.createElement('p');
    showMore.setAttribute('id', 'show-more');
    showMore.innerHTML = `Show more`;
    projects.appendChild(showMore);

    showMore.addEventListener('click', () => {
      // Hide button
      showMore.style.display = 'none';
      // Ppopulate additional projects
      populateProjects(upTo, numberOfProjects, projectsContainer);
    });

    // Info box
    const more = document.createElement('p');
    more.setAttribute('id', 'more');
    more.innerHTML = `The list gets updated regularly with new projects. Check back again soon<span id="exclamation">!</span>`;
    projects.appendChild(more);
  }
}
