import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TagsMod } from '@chakray/tags';
import { BaseTag } from './base/base.tag';

import { dev } from 'src/assets/fonts/dev/dev';
import { iconSet } from '@chakray/tags';

const routes: Routes = [{
  path: '',
  component: BaseTag,
}];

@NgModule({
  imports: [
    TagsMod,
    RouterModule.forChild(routes),
  ],
  providers: [
    { provide: iconSet, useValue: dev, multi: true }
  ],
  declarations: [BaseTag],
  exports: [RouterModule]
})
export class DemoMod { }
