import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

export const heroCfg = {
  mod: 'chakray/tags',
  synopsis: 'collection of angular components',
  tabs: [{ link: 'setup', text: 'Setup' },
         { link: 'demo', text: 'Demo - icon' }]
         // { link: 'icon', text: 'Demo - icon2' }]
};

@Injectable({ providedIn: 'root' })
export class SetupData implements Resolve<Observable<any>> {
  resolve() {
    return of({ file: 'setup', branch: 'master' });
  }
}
