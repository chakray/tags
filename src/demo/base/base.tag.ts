import { Component } from '@angular/core';
import { dev } from 'src/assets/fonts/dev/dev';
import { IconSetManager } from '@chakray/tags';

export const loc = {
  _: {
    cssUrl: '/assets/fonts/loc/loc.css',
    ff: 'loc',
  },
  m1: '\e900',
  m2: '\e901',
};

@Component({
  selector: 'app-base-tag',
  templateUrl: './base.tag.html',
  styleUrls: ['./base.tag.sass'],
})
export class BaseTag {
  i = 0;
  vary = 'no.empty';
  constructor(private ism: IconSetManager) {
    const t = setInterval(() => {
      this.i = this.i + 1;
    }, 1000);
    setTimeout(() => {
      ism.inject(dev);
      this.vary = 'dev.rails';
    }, 2000);
    setTimeout(() => {
      this.vary = 'lm.m2';
      ism.inject(loc);
    }, 4000);
    setTimeout(() => {
      ism.inject(loc);
      clearInterval(t);
    }, 6000);
  }
}
