import { Component } from '@angular/core';
import { dev } from 'src/assets/fonts/dev/dev';
import { iconSet } from '@chakray/tags';

@Component({
  selector: 'base-tag',
  templateUrl: './base.tag.html',
  styleUrls: ['./base.tag.sass'],
  providers: [
    { provide: iconSet, useValue: { dev } }
  ]
})
export class BaseTag {
  i = dev;
}
