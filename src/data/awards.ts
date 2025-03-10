export interface Award {
  plaque: string; // Symbol or icon representing the award
  title: string; // The title of the award
  link: string; // Link to the award's details (image, page, etc.)
  awarder: string; // The name of the organization that gave the award
  awarderLink: string; // Link to the awarder's website
  description: string; // Description of the award
}

// The list of the awards used in the Awards section
export const awardList: Award[] = [
  {
    plaque: `!✦`,
    title: `DESIGN AWARD`,
    link: `../../assets/design-award.png`,
    awarder: `One Page Love`,
    awarderLink: `https://onepagelove.com/michael-kolesidis`,
    description: `An award for my portfolio website (the site you are currently at) awarded by One Page Love, a One Page website design gallery showcasing the best Single Page websites, templates and resources.`,
  },
  {
    plaque: `!★`,
    title: `STAR AWARD`,
    link: `https://www.csswinner.com/details/michael-kolesidis/16936`,
    awarder: `CSS Winner`,
    awarderLink: `https://www.csswinner.com/details/michael-kolesidis/16936`,
    description: `Another award for my portfolio website, awarded by CSS Winner, a unique global platform awarding and showcasing the best websites and promoting innovative web designers, developers and agencies.`,
  },
  {
    plaque: `!✶`,
    title: `SITE OF THE DAY`,
    link: `https://www.bestcss.in/user/detail/michaelkolesidiscom-34682`,
    awarder: `Best CSS`,
    awarderLink: `https://www.bestcss.in/user/detail/michaelkolesidiscom-34682`,
    description: `Another award for my portfolio website, awarded by Best CSS, a web platform that discovers, recognizes and promotes the talent and effort of web designers, developers and agencies who create unique digital experiences that are useful, innovative, intuitive and beautiful.`,
  },
];
