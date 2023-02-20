// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import { generateColor, generateNewColor } from "../functions.js";
import { colors } from "../colors.js";

export default function awards() {
  const awards = document.getElementById("awards");

  if (awards != null) {
    // Contact Title
    const awardsTitle = document.createElement("div");
    awardsTitle.classList.add("wavy");
    awardsTitle.innerHTML = /* html */ `   
       <span style="--i:1">C</span>
       <span style="--i:2">A</span>
       <span style="--i:3">S</span>
       <span style="--i:4">U</span>
       <span style="--i:5">A</span>
       <span style="--i:6">L</span>
       <span style="--i:7">&nbsp;</span>
       <span style="--i:8">A</span>
       <span style="--i:9">W</span>
       <span style="--i:10">A</span>
       <span style="--i:11">R</span>
       <span style="--i:12">D</span>
       <span style="--i:13">S</span>`;
    awards.appendChild(awardsTitle);

    const awardList = [
      {
        title: `DESIGN AWARD - Honorable One Page Website`,
        link: `../../assets/design-award.png`,
        awarder: `One Page Love`,
        awarderLink: `https://onepagelove.com/michael-kolesidis`,
        description: `An award for my personal portofolio website (the site you are currently at!) awarded by One Page Love, a One Page website design gallery showcasing the best Single Page websites, templates and resources.`,
      },
    ];

    // Ppopulate
    for (const awa of awardList) {
      // Award
      const award = document.createElement("div");
      award.setAttribute("id", "award");

      // X
      const awardX = document.createElement("div");
      awardX.classList.add("award-x");
      awardX.innerHTML = `★`;
      award.appendChild(awardX);

      /* Styling */
      awardX.style.color = `rgb(${generateColor(colors).rgb})`;
      awardX.style.textShadow = `4px 4px rgb(0, 0, 0)`;

      awardX.addEventListener("click", () => {
        awardX.style.color = `rgb(${
          generateNewColor(colors, awardX, "color").rgb
        })`;
      });

      // Award Details
      const awardDetails = document.createElement("div");
      awardDetails.classList.add("award-details");
      award.appendChild(awardDetails);

      // Award Title
      let titleContent = "";
      for (let i = 0; i < awa.title.length; i++) {
        titleContent += `<span>${awa.title[i]}</span>`;
      }
      const title = document.createElement("a");
      title.classList.add("award-title");
      title.href = `${awa.link}`;
      title.target = "_blank";
      title.innerHTML = titleContent;
      awardDetails.appendChild(title);

      // Awarder
      let awarderContent = "";
      for (let i = 0; i < awa.awarder.length; i++) {
        awarderContent += `<span>${awa.awarder[i]}</span>`;
      }
      const awarder = document.createElement("a");
      awarder.classList.add("award-awarder");
      awarder.href = `${awa.awarderLink}`;
      awarder.target = "_blank";
      awarder.innerHTML = `<br>${awarderContent}`;
      awardDetails.appendChild(awarder);

      // Description
      const summary = document.createElement("p");
      summary.classList.add("award-description");
      summary.innerText = `${awa.description}`;
      awardDetails.appendChild(summary);

      awards.appendChild(award);
    }
  }
}
