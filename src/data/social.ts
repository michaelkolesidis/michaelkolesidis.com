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

export interface Social {
  name: string; // The name of the social media platform
  filename: string; // The filename of the icon image
  url: string; // The URL to the social media profile
}

// The list of social media links used in the Header and Contact sections
export const socialList: Social[] = [
  {
    name: 'LinkedIn',
    filename: 'linkedin',
    url: 'https://www.linkedin.com/in/michaelkolesidis/',
  },
  {
    name: 'Mastodon',
    filename: 'mastodon',
    url: 'https://mastodon.social/@michaelkolesidis',
  },
  {
    name: 'Bluesky',
    filename: 'bluesky',
    url: 'https://bsky.app/profile/michaelkolesidis.bsky.social',
  },
  {
    name: 'Instagram',
    filename: 'instagram',
    url: 'https://www.instagram.com/michaelkolesidis',
  },
  {
    name: 'GitHub',
    filename: 'github',
    url: 'https://github.com/michaelkolesidis',
  },
  { name: 'Twitter', filename: 'twitter', url: 'https://x.com/michael_kol_' },
];
