import { NgModule } from '@angular/core';

import { CtIconMod } from './icon/icon.mod';
import { CtCallToActionMod } from './call-to-action/call-to-action.mod';
import { CtLzmgMod } from './lzmg/lzmg.mod';

const mods = [
  CtLzmgMod,
  CtIconMod,
  CtCallToActionMod
];

@NgModule({
  imports: [...mods],
  exports: [...mods]
})
export class TagsMod { }
