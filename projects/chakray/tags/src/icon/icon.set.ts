import { InjectionToken } from '@angular/core';
import { CtIconSetMod } from './icon.set.mod';

export function emptySet() {
  return {};
}

export const iconSet = new InjectionToken<any>('icon.set', {
  providedIn: CtIconSetMod, factory: emptySet
});
