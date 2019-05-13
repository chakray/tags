import { InjectionToken } from '@angular/core';
import { CtIconSetMod } from './icon.set.mod';

export const iconSet = new InjectionToken<any>('icon.set', {
  providedIn: CtIconSetMod,
  factory() { return {}; }
});
