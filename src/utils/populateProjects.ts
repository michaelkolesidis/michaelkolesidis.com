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

import projectList from '../data/projects.js';
import { colors } from '../data/colors.js';
import { generateNewColor } from './functions.js';

let colorIndex = 0;

export const populateProjects = (
  start: number,
  end: number,
  parent: HTMLElement
) => {
  for (let i = start; i < end; i++) {
    const project = projectList[i];
    if (!project) return;

    if (project.visible === false) continue;

    // Project Element
    const proj = document.createElement('div');
    proj.classList.add('project-card');

    // Assign a hover color
    let hoverColor = colors[colorIndex % colors.length]!.rgb;
    colorIndex += 1;

    /* Event Listeners */
    proj.addEventListener('mouseover', () => {
      proj.style.backgroundColor = `rgb(${hoverColor})`;
    });

    proj.addEventListener('mouseout', () => {
      proj.style.backgroundColor = `#ffffff`;
    });

    proj.addEventListener('click', () => {
      hoverColor = generateNewColor(colors, proj, 'backgroundColor').rgb; // Change hover color
      proj.style.backgroundColor = `rgb(${hoverColor})`;
    });

    // Project Image with Link
    const image = document.createElement('img');
    image.loading = 'lazy';
    image.setAttribute('src', project.image);
    image.setAttribute('alt', project.name);
    image.classList.add('project-image');
    proj.appendChild(image);

    image.addEventListener('click', () => {
      open(`${project.deployment}`);
    });

    // Title
    const title = document.createElement('div');
    title.classList.add('project-title');
    title.innerHTML = `${project.name.toLocaleUpperCase()}`;
    proj.appendChild(title);

    // Summary
    const summary = document.createElement('p');
    summary.classList.add('project-summary');
    summary.innerHTML = `${project.summary}`;
    proj.appendChild(summary);

    // Separator
    const separator = document.createElement('div');
    separator.classList.add('separator');
    separator.innerHTML = `Made with`;
    proj.appendChild(separator);

    // Technologies
    const technologies = document.createElement('p');
    technologies.classList.add('technologies');
    technologies.innerHTML = `${project.technologies}`;
    proj.appendChild(technologies);

    // Repository Link
    if (project.repository.length > 0) {
      const repoLink = document.createElement('a');
      repoLink.classList.add('repo-link');
      repoLink.innerHTML = 'GitHub';
      repoLink.href = `${project.repository}`;
      repoLink.target = '_blank';
      proj.appendChild(repoLink);
    }

    parent.appendChild(proj);
  }
};
