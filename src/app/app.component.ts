import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HeroConfig } from '@chakray/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private cfg: HeroConfig,
              private ti: Title) {
    ti.setTitle(cfg.mod);
  }
}
