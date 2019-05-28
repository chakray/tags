import { HostBinding, Input, Component, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

import { PopAction as Action, Pop, PopEvent } from './pop.action';

export const sampleActions = [
  new Action({ text: 'Agree', data: true, class: 'toast' }),
  new Action({ text: 'Close', data: false }),
];

@Component({
  selector: 'ct-pop',
  templateUrl: './pop.tag.html',
  styleUrls: ['./pop.tag.sass']
})
export class CtPopTag implements Pop {
  @Input() set actions(v) {
    v = v || [];
    this._actions = v.map(i => new Action(i));
  }
  get actions() {
    return this._actions;
  }
  @HostBinding('class.on') on = false;
  sub: Subject<PopEvent>;
  private _actions: Action[] = sampleActions;
  open() {
    this.on = true;
    if (this.sub) {
      this.sub.complete();
    }
    this.sub = new Subject<PopEvent>();
    return this.sub;
  }
  close() {
    this.on = false;
  }
  act(a) {
    this.sub.next({ action: a, tag: this });
  }
}
