import { Inject, Injectable, Injector } from '@angular/core';
import { of } from 'rxjs';
import { Head } from './head';

import { CtIconSetMod as IconSetMod } from './icon.set.mod';
import { iconSet, IconSet, IconSets, IconSetParams } from './icon.set';

@Injectable({ providedIn: IconSetMod })
export class IconSetManager {
  ref: IconSets = {};
  ns = '';
  constructor(
    // private inj: Injector,
    private head: Head,
    @Inject(iconSet) private cfg: IconSetParams | IconSetParams[]) {
    if (Array.isArray(cfg)) {
      cfg.forEach(s => this.init(s));
    } else {
      this.init(cfg);
    }
    this.ns = Object.keys(this.ref)[0];
  }
  findRef(ns) {
    const ref = this.ref[ns || this.ns]; // || this.inj.get(iconSet);
    // console.log('jin', this.inj.get(iconSet));
    return ref ? of(ref) : of(new IconSet({} as any));
  }
  private init(isp: IconSetParams) {
    const i = new IconSet(isp);
    this.ref[i.options.namespace] = i;
    this.head.style(i.options.cssUrl);
  }
}
