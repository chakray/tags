import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtCallToActionMod as CtaMod } from '../call-to-action/call-to-action.mod';

import { CtPopTag as Tag } from './pop.tag';

@NgModule({
  imports: [
    CommonModule,
    CtaMod,
  ],
  declarations: [Tag],
  exports: [Tag]
})
export class CtPopMod {}
