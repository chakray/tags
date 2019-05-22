import { InjectionToken } from '@angular/core';
import { CtIconSetMod } from './icon.set.mod';

export class Kegs {
  [k: string]: string;
  constructor(o = {}) { Object.assign(this, o); }
}
export class Options {
  get namespace() {
    return this.ns;
  }
  cssUrl = '';
  ff = '';
  private ns = '';
  get fontFamily() {
    return this.ff;
  }
  constructor(opts = {}) {
    Object.assign(this, opts);
    this.ns = this.ns || this.ff;
  }
}
export class IconSetParams {
  _: object;
  [k: string]: object | string;
}
export class IconSet {
  options = new Options();
  kegs = new Kegs();
  constructor({ _, ...rest }) {
    this.options = new Options(_);
    this.kegs = new Kegs(rest);
  }
}
export class IconSets {
  [k: string]: IconSet;
}

export function emptySet() {
  return {};
}

export const iconSet = new InjectionToken<IconSets>('icon.set', {
  providedIn: CtIconSetMod, factory: emptySet
});
