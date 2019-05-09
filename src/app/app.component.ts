import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Gtag } from '@chakray/utils/gtag';

const mod = 'chakray/tags';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  data = {
    mod,
    synopsis: 'A collection of useful tags',
    setup: { title: '', content: '' }
  };
  constructor(private gtag: Gtag,
              private ti: Title,
              private http: HttpClient) {
    ti.setTitle(mod);
    const url = `https://raw.githubusercontent.com/${mod}/master/notes/setup.md`;
    http.get(url, { responseType: 'text' }).subscribe(d => {
      const [title, ...content] = d.split('\n');
      const o = { title: title.split(' ')[1], content: content.join('\n') };
      Object.assign(this.data.setup, o);
    });
  }
}
