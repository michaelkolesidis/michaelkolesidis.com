// https://michaelkolesidis.com
// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import projectList from "../data/projects.js";
import { colors } from "./colors.js";
import { generateNewColor } from "./functions.js";

let colorIndex = 0;

export function populateProjects(
  start: number,
  end: number,
  parent: HTMLElement
) {
  // Ppopulate Projects
  for (let i = start; i < end; i++) {
    const project = projectList[i];
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
    title.innerHTML = `<br>${project.name.toLocaleUpperCase()}`;
    proj.appendChild(title);

    // Summary
    const summary = document.createElement("p");
    summary.classList.add("project-summary");
    summary.innerHTML = `${project.summary}`;
    proj.appendChild(summary);

    // Technologies
    const techonolgies = document.createElement("p");
    techonolgies.classList.add("technologies");
    techonolgies.innerHTML = `${project.technologies}`;
    proj.appendChild(techonolgies);

    // Repository Link
    const repoLink = document.createElement("a");
    repoLink.classList.add("repo-link");
    repoLink.innerHTML = "GitHub";
    repoLink.href = `${project.repository}`;
    repoLink.target = "_blank";
    proj.appendChild(repoLink);

    parent.appendChild(proj);
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
}
