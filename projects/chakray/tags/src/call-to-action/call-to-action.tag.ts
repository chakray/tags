import { HostListener, Input, Component, HostBinding, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ct-call-to-action,cta',
  template: '<ng-content></ng-content>',
  styleUrls: ['./call-to-action.tag.sass']
})
export class CtCallToActionTag {
  // @HostBinding('attr.tabIndex') ti = 0;
  @HostBinding('class.active') active = false;
  @HostBinding('class.hidden') @Input() hide = false;
  @HostBinding('class.frozen') @Input() frozen = false;
  @HostBinding('class.trigger') get trigger() {
    return this.act === 'push';
  }
  @Input() act: 'push' | 'sink' = 'push';
  @Output() event = new EventEmitter();

  @HostListener('click', ['$event']) clk(e) {
    if (this.frozen) { return; }
    this.event.emit({ action: 'click', data: { tag: this, ...e } });
  }
  @HostListener('pointerup', ['$event']) ptu(e) {
    if (this.frozen) { return; }
    if (this.act === 'sink') { return; }
    setTimeout(() => {
      this.active = false;
    }, 100);
  }
  @HostListener('pointerdown', ['$event']) ptd(e) {
    if (this.frozen) { return; }
    this[this.act + 'Act']();
  }
  freeze() {
    this.frozen = true;
  }
  sinkAct() {
    this.active = !this.active;
  }
  pushAct() {
    this.active = true;
  }
}
