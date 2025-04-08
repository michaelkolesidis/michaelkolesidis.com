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

export interface Award {
  color: number; // Color
  title: string; // The title of the award
  link: string; // Link to the award's details (image, page, etc.)
  awarder: string; // The name of the organization that gave the award
  awarderLink: string; // Link to the awarder's website
  description: string; // Description of the award
}

// The list of the awards used in the Awards section
export const awardList: Award[] = [
  {
    color: 0,
    title: `DESIGN AWARD`,
    link: `../../assets/design-award.png`,
    awarder: `One Page Love`,
    awarderLink: `https://onepagelove.com/michael-kolesidis`,
    description: `Awarded for my portfolio website (the site you are currently at) by One Page Love, a One Page website design gallery showcasing the best Single Page websites, templates and resources.`,
  },
  {
    color: 1,
    title: `STAR AWARD`,
    link: `https://www.csswinner.com/details/michael-kolesidis/16936`,
    awarder: `CSS Winner`,
    awarderLink: `https://www.csswinner.com/details/michael-kolesidis/16936`,
    description: `Awarded for my portfolio website by CSS Winner, a unique global platform awarding and showcasing the best websites and promoting innovative web designers, developers and agencies.`,
  },
  {
    color: 3,
    title: `SITE OF THE DAY`,
    link: `https://www.bestcss.in/user/detail/michaelkolesidiscom-34682`,
    awarder: `Best CSS`,
    awarderLink: `https://www.bestcss.in/user/detail/michaelkolesidiscom-34682`,
    description: `Awarded for my portfolio website by Best CSS, a web platform that discovers, recognizes and promotes the talent and effort of web designers, developers and agencies who create unique digital experiences that are useful, innovative, intuitive and beautiful.`,
  },
];
