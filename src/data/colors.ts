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

type HexColor = `#${string}`; // Not strict, but conveys intent
type RGBColor = `${number}, ${number}, ${number}`; // Not strict, but conveys intent
export interface Color {
  name: string;
  hex: HexColor;
  rgb: RGBColor;
}

// The color palette used throughout the website
export const colors: Color[] = [
  {
    name: `pink`,
    hex: `#ff90e8`,
    rgb: `255, 144, 232`,
  },
  {
    name: `yellow`,
    hex: `#ffc900`,
    rgb: `255, 201, 0`,
  },
  {
    name: `orange`,
    hex: `#ff7051`,
    rgb: `255, 112, 81`,
  },
  {
    name: `green`,
    hex: `#3ecfc1`,
    rgb: `62, 207, 193`,
  },
  {
    name: `purple`,
    hex: `#90a8ed`,
    rgb: `144, 168, 237`,
  },
] as const satisfies Color[];
