import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChHeroMod, ChMarkedTabTag, heroConfig } from '@chakray/hero';

import { SetupData, heroCfg } from './setup.data';
import { AppDemoTag } from './demo/demo.tag';

const routes: Routes = [{
  path: '', pathMatch: 'full', redirectTo: 'demo'
}, {
  path: 'setup',
  resolve: {
    loader: SetupData
  },
  component: ChMarkedTabTag
}, {
  path: 'demo',
  component: AppDemoTag,
  loadChildren: '../demo#DemoMod'
}, {
  path: '**', pathMatch: 'full', redirectTo: 'demo'
}];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ChHeroMod,
  ],
  declarations: [
    AppDemoTag
  ],
  providers: [
    { provide: heroConfig, useValue: heroCfg }
  ],
  exports: [
    ChHeroMod,
    RouterModule
  ]
})
export class AppRouting { }
