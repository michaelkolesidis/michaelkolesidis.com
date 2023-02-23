// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

let instance: any = null;

export default class WindowSystem {
  base!: number;
  highZ!: number;

  constructor() {
    if (instance) {
      return instance;
    }

    instance = this;

    // Options
    this.base = 2;
    this.highZ = this.base;
  }

  moveOnTop() {
    let newHigh = this.highZ + 2;
    this.highZ = newHigh;
    return newHigh;
  }
}
