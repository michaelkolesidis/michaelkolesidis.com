// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import projectList from "../data/projects.js";
import { generateNewColor } from "../functions.js";
import { colors } from "../colors.js";

export default function projects() {
  const projects = document.getElementById("projects");

  if (projects != null) {
    // Project Title
    const projectsTitle = document.createElement("div");
    projectsTitle.classList.add("wavy");
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

    const projectsContainer = document.createElement("div");
    projectsContainer.setAttribute("id", "projects-container");
    projects.appendChild(projectsContainer);

    let colorIndex = 0;

    // Ppopulate Projects
    for (const project of projectList) {
      if (project.visible === false) {
        continue;
      }

      // Project
      const proj = document.createElement("div");
      proj.classList.add("project-card");

      /* Styling */
      const color = colors[colorIndex % colors.length].rgb;
      proj.style.backgroundColor = `rgb(${color})`;
      colorIndex += 1;

      // Project Image with Link
      const image = document.createElement("img");
      image.loading = "lazy";
      image.setAttribute("src", project.image);
      image.setAttribute("alt", project.name);
      image.classList.add("project-image");
      proj.appendChild(image);
      image.addEventListener("click", () => {
        open(`${project.deployment}`);
      });

      // Title
      const title = document.createElement("a");
      title.classList.add("project-title");
      title.href = `${project.deployment}`;
      title.target = "_blank";
      title.innerHTML = `<br>${project.name}`;
      proj.appendChild(title);

      // Summary
      const summary = document.createElement("p");
      summary.classList.add("project-summary");
      summary.innerText = `${project.summary}`;
      proj.appendChild(summary);

      // Technologies

      const techonolgies = document.createElement("p");
      techonolgies.classList.add("technologies");
      techonolgies.innerText = `${project.technologies}`;
      proj.appendChild(techonolgies);

      // Repository Link
      const repoLink = document.createElement("a");
      repoLink.classList.add("repo-link");
      repoLink.innerText = "GitHub";
      repoLink.href = `${project.repository}`;
      repoLink.target = "_blank";
      proj.appendChild(repoLink);

      projectsContainer.appendChild(proj);
    }

    const allProjects = document.querySelectorAll(".project-card");
    allProjects.forEach((proj) => {
      proj.addEventListener("click", (e) => {
        /* Styling */
        const target = e.target as HTMLElement;
        if (target.classList.contains("project-card")) {
          target.style.backgroundColor = `rgb(${
            generateNewColor(colors, target, "backgroundColor").rgb
          })`;
        }
      });
    });

    // Info box
    const more = document.createElement("p");
    more.setAttribute("id", "more");
    more.innerText = `The list gets updated regularly with new projects. Check back again soon!`;
    projects.appendChild(more);
  }
}
