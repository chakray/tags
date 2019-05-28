import { Observable } from 'rxjs';

export class PopAction {
  text = '';
  class = '';
  name = '';
  data: any;
  constructor(o?) {
    Object.assign(this, o);
    if (!this.name) {
      this.name = this.text.toLowerCase();
    }
  }
}

export interface Pop {
  actions: PopAction[];
  open: () => Observable<PopEvent>;
  close: () => void;
}

export interface PopEvent {
  action: PopAction;
  tag: Pop;
}
