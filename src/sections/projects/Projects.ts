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

import './projects.scss';
import projectList from '../../data/projects.js';
import { populateProjects } from '../../utils/populateProjects.js';

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

  // Info Box
  const more = document.createElement('p');
  more.id = 'more';
  more.style.display = 'none';
  more.innerHTML =
    'The list gets updated regularly with new projects. Check back again soon!';
  projects.appendChild(more);

  // Show More Button
  const showMore = document.createElement('p');
  showMore.id = 'show-more';
  showMore.innerHTML = 'Show more';
  projects.appendChild(showMore);

  showMore.addEventListener('click', () => {
    populateProjects(upTo, projectList.length, projectsContainer);
    more.style.display = 'block';
    more.style.display = 'block';
    showMore.style.display = 'none';
  });
}
