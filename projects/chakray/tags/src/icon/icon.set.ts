import { InjectionToken } from '@angular/core';
import { CtIconSetMod } from './icon.set.mod';

export class IconSetOption {
  cssUrl = '';
  ff = '';
  get fontFamily() {
    return this.ff;
  }
}
export class IconSet {
  _ = new IconSetOption();
  [k: string]: string | IconSetOption;
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
