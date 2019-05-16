import { Inject, HostBinding, Input, Component } from '@angular/core';

import { Head } from './head';
import { iconSet, IconSets, IconSet } from './icon.set';

@Component({
  selector: 'ct-icon,ct-i,cti',
  template: '',
  styleUrls: ['icon.tag.sass']
})
export class CtIconTag {
  @HostBinding('style.font-family') @Input() ff = '';
  @Input() set code(v) {
    this._code = String.fromCharCode(parseInt(v, 16));
    this.x = !!!v;
  }
  get code() {
    return this._code;
  }
  @Input() set key(v) {
    if (v.indexOf('.') < 0) {
      v = '.' + v;
    }
    const [ns, key] = v.split('.');
    const set = this.set[ns || this.preset] || new IconSet();
    this.ff = set._.ff;
    this.code = set[key] as string;
  }
  @HostBinding('attr.data-icon-code') _code = '';
  @HostBinding('class.x') x = false;
  preset = '';
  constructor(
    head: Head,
    @Inject(iconSet) private set: IconSets) {
    const ks = Object.keys(set);
    this.preset = ks[0];
    ks.forEach(k => {
      head.style(set[k]._.cssUrl);
    });
  }
}
