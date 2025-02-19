import projectList from '../data/projects.js';
import { populateProjects } from '../utils/populateProjects.js';

export default function projects() {
  const projects = document.getElementById('projects');
  if (!projects) return;

  // Title
  const projectsTitle = document.createElement('div');
  projectsTitle.classList.add('wavy');
  projectsTitle.innerHTML = /* html */ `
    ${'PORTFOLIO'
      .split('')
      .map(
        (letter, index) => `<span style="--i:${index + 1}">${letter}</span> `
      )
      .join('')}
  `;
  projects.appendChild(projectsTitle);

  // Container and Projects Population
  const projectsContainer = document.createElement('div');
  projectsContainer.id = 'projects-container';
  projects.appendChild(projectsContainer);

  const upTo = 8;
  populateProjects(0, upTo, projectsContainer);

  // Show More Button
  const showMore = document.createElement('p');
  showMore.id = 'show-more';
  showMore.innerHTML = 'Show more';
  projects.appendChild(showMore);

  showMore.addEventListener('click', () => {
    showMore.style.display = 'none';
    populateProjects(upTo, projectList.length, projectsContainer);
  });

  // Info Box
  const more = document.createElement('p');
  more.id = 'more';
  more.innerHTML =
    'The list gets updated regularly with new projects. Check back again soon<span id="exclamation">!</span>';
  projects.appendChild(more);
}
