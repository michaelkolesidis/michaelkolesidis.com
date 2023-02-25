// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

let instance: any = null;

export default class WindowManager {
  base!: string;
  highZ!: string;

  constructor(base = 1) {
    if (instance) {
      return instance;
    }

    instance = this;

    // Values
    this.base = base.toString();
    this.highZ = this.base;
  }

  moveOnTop() {
    let newHigh = parseInt(this.highZ) + 1;
    this.highZ = newHigh.toString();
    return newHigh.toString();
  }
}
