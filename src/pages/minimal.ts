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

import projectList from '../data/projects';

const projects = document.getElementById('projects-container');

for (const project of projectList) {
  if (project.visible === false) {
    continue;
  }

  // Project
  const proj = document.createElement('div');
  proj.classList.add('project-card');

  // Title
  const title = document.createElement('a');
  title.classList.add('project-title');
  title.href = `${project.deployment}`;
  title.target = '_blank';
  title.innerHTML = `<br>${project.name}`;
  proj.appendChild(title);

  // Summary
  const summary = document.createElement('p');
  summary.classList.add('project-summary');
  summary.innerHTML = `${project.summary}`;
  proj.appendChild(summary);

  // Technologies
  const techonolgies = document.createElement('p');
  techonolgies.classList.add('technologies');
  techonolgies.innerHTML = `${project.technologies}`;
  proj.appendChild(techonolgies);

  // Repository Link
  const repoLink = document.createElement('a');
  repoLink.classList.add('repo-link');
  repoLink.innerHTML = 'GitHub';
  repoLink.href = `${project.repository}`;
  repoLink.target = '_blank';
  proj.appendChild(repoLink);

  projects && projects.appendChild(proj);
}
