import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TagsMod } from '@chakray/tags';
import { BaseTag } from './base/base.tag';
import { CtaTag } from './cta/cta.tag';

const routes: Routes = [{
  path: '', pathMatch: 'full', redirectTo: 'icon'
}, {
  path: 'icon',
  component: BaseTag,
}, {
  path: 'cta',
  component: CtaTag,
}];

@NgModule({
  imports: [
    CommonModule,
    TagsMod,
    RouterModule.forChild(routes),
  ],
  providers: [],
  declarations: [
    CtaTag,
    BaseTag],
  exports: [RouterModule]
})
export class DemoMod { }
