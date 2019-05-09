import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { gtagID } from '@chakray/utils/gtag';
import { ChHeroMod } from '@chakray/hero';

import { AppComponent } from './app.component';
import { environment as env } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    HttpClientModule,
    ChHeroMod,
    BrowserModule
  ],
  providers: [
    { provide: gtagID, useValue: env.gtagId }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
