import { NgModule } from '@angular/core';

import { CtCallToActionTag } from './call-to-action.tag';

const tags = [CtCallToActionTag];

@NgModule({
  declarations: [...tags],
  exports: [...tags]
})
export class CtCallToActionMod { }
