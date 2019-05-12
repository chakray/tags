import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { gtagID } from '@chakray/utils/gtag';
import { ChHeroMod, ChMarkedTabTag, heroConfig } from '@chakray/hero';

import { AppComponent } from './app.component';
import { environment as env } from '../environments/environment';

import { SetupData, heroCfg } from './setup.data';
import { AppDemoTag } from './demo/demo.tag';

const routes: Routes = [{
  path: 'setup',
  resolve: {
    loader: SetupData
  },
  component: ChMarkedTabTag
}, {
  path: 'demo',
  component: AppDemoTag
}];

@NgModule({
  declarations: [
    AppComponent,
    AppDemoTag
  ],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    ChHeroMod,
    BrowserModule
  ],
  providers: [
    { provide: gtagID, useValue: env.gtagId },
    { provide: heroConfig, useValue: heroCfg }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
