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

document.body.innerHTML += /*html*/ `
<div id="header">Michael Kolesidis</div>
<div id="subheader">Developer • Designer • Art Director</div>
<div class="container">
  <div id="top-section">
    <!-- Summary -->
    <div class="section" id="summary">
      I'm a designer, developer, and art director creating handcrafted,
      meaningful experiences across digital, print, branding, and product.
      Always open to exciting projects — let's discuss yours!
    </div>
    <!-- Contact -->
    <div class="section" id="contact">
      <div id="links">
        <a href="https://michaelkolesidis.com/" target="_blank"
          >michaelkolesidis.com</a
        >
        <a
          href="https://www.linkedin.com/in/michaelkolesidis/"
          target="_blank"
          >LinkedIn</a
        >
        <a href="https://github.com/michaelkolesidis" target="_blank"
          >GitHub</a
        >
        <br />
        <a href="mailto:michael.kolesidis@gmail.com"
          >michael.kolesidis@gmail.com</a
        >
      </div>
    </div>
  </div>
  <!-- Projects -->
  <div class="section" id="projects">
    <h1>PROJECTS</h1>
    <div id="projects-container"></div>
  </div>
  <!-- Awards -->
  <div class="section" id="awards">
    <div class="award">
      <a
        href="https://www.bestcss.in/user/detail/michaelkolesidiscom-34682"
        target="_blank"
      >
        <h3>SITE OF THE DAY</h3>
      </a>
      <h4>Best CSS</h4>
      <p>
        Awarded by Best CSS, a web platform that discovers, recognizes and
        promotes the talent and effort of web designers, developers and
        agencies who create unique digital experiences that are useful,
        innovative, intuitive and beautiful.
      </p>
    </div>
    <div class="award">
      <a href="../assets/design-award.png" target="_blank"
        ><h3>DESIGN AWARD</h3></a
      >
      <h4>One Page Love</h4>
      <p>
        Awarded by One Page Love, a One Page website design gallery
        showcasing the best Single Page websites, templates and resources.
      </p>
    </div>
    <div class="award">
      <a
        href="https://www.csswinner.com/details/michael-kolesidis/16936"
        target="_blank"
      >
        <h3>STAR AWARD</h3>
      </a>
      <h4>CSS Winner</h4>
      <p>
        Awarded by CSS Winner, a unique global platform awarding and
        showcasing the best websites and promoting innovative web designers,
        developers and agencies.
      </p>
    </div>
  </div>
</div>
<!-- Duck -->
<svg id="duck" width="512" height="512" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m178.68 0.49267c-20.566 2.5702-70.019 15.531-93.291 80.29-2.0927 5.824-4.9453 15.89-9.2513 19.907-16.555 15.442-59.28 12.841-72.564 24.622-3.7549 3.3306-4.3229 13.092-2.7655 18.268 0.65678 2.176 1.6475 4.5056 3.136 6.7097 4.4358 6.5664 12.79 12.196 27.436 17.572 9.7854 3.5916 26.068 7.9872 36.212 10.104 0.96557 0.20121 1.9177 0.384 2.8603 0.56319 10.168 1.9712 28.434 1.8688 35.64 9.5385 5.1456 5.4733 7.7562 13.727 9.6334 23.068 1.1262 5.6038 0.32116 14.671-2.8126 19.254-14.915 21.809-55.057 45.637-62.483 98.043-1.4853 10.475-1.6205 32.328-0.25018 40.432 10.115 59.848 72.375 143.33 210.87 143.14 256.15-0.4352 255.31-210.87 249.49-272.98-2.3858-25.439-5.9062-43.577-10.305-53.093-2.0645-4.4646-3.2549-5.2198-7.6627-4.8563-4.4745 0.35841-8.7307 2.4064-28.357 13.55-101.81 57.828-216.75 55.268-181.35-12.552 24.069-43.574 22.056-79.063 18.277-97.38-4.5708-22.356-13.084-39.448-26.754-53.713-11.995-12.518-26.939-21.202-45.295-26.324-17.502-4.8845-42.151-5.2019-50.406-4.1856" fill="#040404" fill-rule="evenodd" stroke-width=".54573"/></svg>`;

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
