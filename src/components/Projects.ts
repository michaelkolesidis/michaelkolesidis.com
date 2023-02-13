// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import projectList from "../data/projects.js";

export default function projects() {
  const projects = document.getElementById("projects");

  if (projects != null) {
    // Project Title
    let projectsTitle = document.createElement("div");
    projectsTitle.classList.add("wavy");
    projectsTitle.innerHTML = `   
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

    let projectsContainer = document.createElement("div");
    projectsContainer.setAttribute("id", "projects-container");
    projects.appendChild(projectsContainer);

    // Ppopulate Projects
    for (const project of projectList) {
      if (project.visible === false) {
        continue;
      }

      let proj = document.createElement("div");
      proj.classList.add("project-card");

      /* Styling */
      const r = Math.floor(Math.random() * 131 + 120);
      const g = Math.floor(Math.random() * 131 + 120);
      const b = Math.floor(Math.random() * 131 + 120);
      proj.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

      // Project Image + Link
      let image = document.createElement("img");
      image.setAttribute("src", project.image);
      image.setAttribute("alt", project.name);
      image.classList.add("project-image");
      proj.appendChild(image);

      image.addEventListener("click", () => {
        open(`${project.deployment}`);
      });

      // Title
      let title = document.createElement("a");
      title.classList.add("project-title");
      title.href = `${project.deployment}`;
      title.target = "_blank";
      title.innerHTML = `<br>${project.name}`;
      proj.appendChild(title);

      // Summary
      let summary = document.createElement("p");
      summary.innerText = `${project.summary}`;

      proj.appendChild(summary);

      // Technologies

      let techonolgies = document.createElement("p");
      techonolgies.classList.add("technologies");
      techonolgies.innerText = `${project.technologies}`;
      proj.appendChild(techonolgies);

      // Repository Link
      let repoLink = document.createElement("a");
      repoLink.classList.add("repo-link");
      repoLink.innerText = "GitHub";
      repoLink.href = `${project.repository}`;
      repoLink.target = "_blank";
      proj.appendChild(repoLink);

      projectsContainer.appendChild(proj);
    }

    let allProjects = document.querySelectorAll(".project-card");
    allProjects.forEach((proj) => {
      proj.addEventListener("click", (e) => {
        /* Styling */
        const target = e.target as HTMLElement;
        if (target.classList.contains("project-card")) {
          const r = Math.floor(Math.random() * 131 + 120);
          const g = Math.floor(Math.random() * 131 + 120);
          const b = Math.floor(Math.random() * 131 + 120);
          target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
      });
    });

    let more = document.createElement("p");
    more.setAttribute("id", "more");

    more.innerText = `The list gets updated regularly with new projects. Check back again soon!`;
    projects.appendChild(more);
  }
}
