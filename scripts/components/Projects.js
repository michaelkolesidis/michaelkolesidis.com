// © 2022 Michael Kolesidis. All rights reserved.
// michael.kolesidis@gmail.com

import projectList from "../../data/projects.js";

export default function projects() {
  const projects = document.getElementById("projects");

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
    let proj = document.createElement("div");

    proj.classList.add("project-card");

    // Project Image + Link
    let imageLink = document.createElement("a");
    imageLink.href = `${project.deployment}`;
    imageLink.target = "_blank";

    let projectImage = document.createElement("img");
    projectImage.src = `${project.image}`;
    projectImage.alt = `${project.name}`;
    projectImage.classList.add("project-image");

    imageLink.appendChild(projectImage);
    proj.appendChild(imageLink);

    // Title
    let title = document.createElement("a");
    title.href = `${project.deployment}`;
    title.target = "_blank";

    let titleText = document.createElement("h2");
    titleText.innerText = `${project.name}`;
    titleText.classList.add("project-title");

    title.appendChild(titleText);

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
    let linkText = document.createElement("p");
    linkText.classList.add("repo-link");
    linkText.innerText = "GitHub";
    repoLink.appendChild(linkText);
    proj.appendChild(repoLink);
    repoLink.href = `${project.repository}`;
    repoLink.target = "_blank";

    projectsContainer.appendChild(proj);
  }

  let more = document.createElement("p");
  more.setAttribute("id", "more");
  more.innerText = `The list comprises both bits that have been included to final products and personal side projects. It gets updated regularly with new material. Check back soon!`;
  projects.appendChild(more);
}
