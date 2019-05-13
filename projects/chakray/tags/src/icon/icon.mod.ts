import { NgModule } from '@angular/core';
import { CtIconSetMod } from './icon.set.mod';

import { CtIconTag } from './icon.tag';

@NgModule({
  imports: [
    CtIconSetMod
  ],
  declarations: [
    CtIconTag
  ],
  exports: [
    CtIconTag
  ]
})
export class CtIconMod {}
