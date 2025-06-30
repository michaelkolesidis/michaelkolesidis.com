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
import { gsap } from 'gsap';

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

  // Populate Projects
  populateProjects(0, projectList.length, projectsContainer);

  // Info Box
  const more = document.createElement('p');
  more.id = 'more';
  more.innerHTML =
    'The list gets updated regularly with new projects. Check back again soon!';
  projects.appendChild(more);

  // Card Animation
  const cards = document.querySelectorAll('.project-card');

  // Set the initial state of the cards
  gsap.set(cards, { opacity: 0, y: 50 });

  const observer = new IntersectionObserver(
    (entries, observer) => {
      // Create an array of all the cards that are now intersecting
      const intersectingCards = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => entry.target);

      // If any cards have intersected, animate them
      if (intersectingCards.length > 0) {
        gsap.to(intersectingCards, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.15, // 0.15s delay between each card's animation
        });

        // Unobserve the cards that were just animated
        intersectingCards.forEach((card) => observer.unobserve(card));
      }
    },
    {
      threshold: 0.15, // Start when 15% of the card is visible
    }
  );

  // Tell the observer to watch each card
  cards.forEach((card) => {
    observer.observe(card);
  });
}
