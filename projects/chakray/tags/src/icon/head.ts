import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CtIconSetMod } from './icon.set.mod';

@Injectable({ providedIn: CtIconSetMod })
export class Head {
  private used = {};
  constructor(@Inject(DOCUMENT) private doc) { }
  style(href) {
    if (this.used[href]) { return; }
    this.used[href] = true;
    this.link({
      rel: 'stylesheet',
      type: 'text/css',
      href });
  }
  link(attrs) {
    const link: HTMLLinkElement = this.doc.createElement('link');
    Object.keys(attrs).forEach(k => {
      link.setAttribute(k, attrs[k]);
    });
    this.doc.head.appendChild(link);
  }
}
