import { Inject, HostBinding, Input, Component } from '@angular/core';

import { IconSetManager } from './icon-set.manager';

@Component({
  selector: 'ct-icon,ct-i,cti',
  template: '',
  styleUrls: ['icon.tag.sass']
})
export class CtIconTag {
  @HostBinding('attr.data-icon-code') codeStr = '';
  @HostBinding('class.x') x = false;
  @HostBinding('style.font-family') @Input() ff = '';
  @Input() set code(v) {
    this.codeStr = String.fromCharCode(parseInt(v, 16));
    this.x = !!!v;
  }
  @Input() set key(v) {
    if (v.indexOf('.') < 0) {
      v = '.' + v;
    }
    const [ns, key] = v.split('.');
    this.ism.findRef(ns).subscribe(ref => {
      this.ff = ref.options.ff;
      this.code = ref.kegs[key];
    });
  }
  constructor(private ism: IconSetManager) {
  }
}
