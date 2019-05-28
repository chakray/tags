import { HostBinding, ViewChild, ElementRef, Input, Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'ct-lzmg,ct-zmg',
  template: `<ng-content></ng-content>
    <img #img (load)='loaded($event)'/>`,
  styleUrls: ['./lzmg.tag.sass']
})
export class CtLzmgTag implements AfterViewInit {
  @ViewChild('img') img: ElementRef;
  @Input() set src(v: string) {
    this._src = v;
    this.on = false;
    if (v) {
      this.visible = this.visible;
    }
  }
  get src() {
    return this._src;
  }
  @HostBinding('class.on') on = false;
  set visible(v) {
    this._visible = v;
    if (v && !this.on) {
      this.load();
    }
  }
  get visible() {
    return this._visible;
  }
  private _visible = false;
  private _src;
  constructor(private el: ElementRef) {}
  ngAfterViewInit() {
    const { nativeElement: node } = this.el;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(({ isIntersecting }) => {
        this.visible = isIntersecting;
        // obs.unobserve(node);
      });
    });
    obs.observe(node);
  }
  loaded(e) {
    this.on = true;
  }
  private load() {
    if (!this.src) { return; }
    this.img.nativeElement.src = this.src;
  }
}
