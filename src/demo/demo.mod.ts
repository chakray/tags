import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TagsMod } from '@chakray/tags';
import { BaseTag } from './base/base.tag';

const routes: Routes = [{
  path: '',
  component: BaseTag,
}];

@NgModule({
  imports: [
    TagsMod,
    RouterModule.forChild(routes),
  ],
  providers: [],
  declarations: [BaseTag],
  exports: [RouterModule]
})
export class DemoMod { }
