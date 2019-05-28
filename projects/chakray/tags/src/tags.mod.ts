import { NgModule } from '@angular/core';

import { CtIconMod } from './icon/icon.mod';
import { CtCallToActionMod } from './call-to-action';
import { CtBgImgMod } from './bg-img';

const mods = [
  CtBgImgMod,
  CtIconMod,
  CtCallToActionMod
];

@NgModule({
  imports: [...mods],
  exports: [...mods]
})
export class TagsMod { }
