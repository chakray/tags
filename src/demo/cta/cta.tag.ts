import { Component } from '@angular/core';

let i = 200;
@Component({
  selector: 'app-cta',
  templateUrl: './cta.tag.html',
  styleUrls: ['./cta.tag.sass']
})
export class CtaTag {
  snkTxt = 'sink';
  osState = 1;
  wtState = 1;

  img = '';
  evt({ action: a, data: d }) {
    this.snkTxt = d.tag.active ? 'Sunk' : 'Deal';
  }
  osEvt({ action: a, data: d }) {
    d.tag.freeze();
    this.osState = 2;
    setTimeout(() => {
      this.osState = 3;
    }, 2000);
  }
  waitEvt({ action: a, data: d }) {
    d.tag.freeze();
    this.wtState = 2;
    i = i + 10;
    setTimeout(() => {
      this.wtState = 1;
      this.img = i % 22 === 0 ? null : `http://lorempixel.com/400/${i}/`;
      d.tag.frozen = false;
    }, 1000);
  }
}
