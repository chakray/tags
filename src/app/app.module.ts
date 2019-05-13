import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRouting } from './app.routing';

import { gtagID } from '@chakray/utils/gtag';

import { AppComponent } from './app.component';
import { environment as env } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRouting,
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    { provide: gtagID, useValue: env.gtagId },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
