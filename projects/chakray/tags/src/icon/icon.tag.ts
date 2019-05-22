import { Inject, HostBinding, Input, Component } from '@angular/core';
import { Subscription } from 'rxjs';

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
    this.stopRetry();
    this.makeRef(ns, key);
  }
  private retry: Subscription;
  constructor(private ism: IconSetManager) { }
  private stopRetry() {
    if (!this.retry) { return; }
    this.retry.unsubscribe();
    this.retry = null;
  }
  private update(ref, key) {
    this.ff = ref.options.ff;
    this.code = ref.kegs[key];
    if (this.ff) {
      this.stopRetry();
    }
  }
  private makeRef(ns, key) {
    this.ism.findRef(ns).subscribe(ref => {
      this.update(ref, key);
      if (!this.ff) {
        this.retry = this.ism.retry(ns).subscribe(r => {
          this.update(r, key);
        });
      }
    });
  }
}
