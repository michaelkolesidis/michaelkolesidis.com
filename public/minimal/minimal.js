const projects = document.getElementById('projects-container');

import projectList from './projects.js';

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

  projects.appendChild(proj);
}
