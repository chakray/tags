import { Component } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.tag.html',
  styleUrls: ['./cta.tag.sass']
})
export class CtaTag {
  snkTxt = 'sink';
  osState = 1;
  wtState = 1;
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
    setTimeout(() => {
      this.wtState = 1;
      d.tag.frozen = false;
    }, 2000);
  }
}
