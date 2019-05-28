import { HostBinding, ViewChild, ElementRef, Input, Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'ct-bg-img,ct-bmg',
  template: `<img #img (load)='loaded($event)'/>`,
  styleUrls: ['./bg-img.tag.sass']
})
export class CtBgImgTag implements AfterViewInit {
  @ViewChild('img') img: ElementRef;
  @Input() set src(v: string) {
    if (!v) { return; }
    this._src = v;
    if (!this.loading) {
      this.load();
    }
  }
  get src() {
    return this._src;
  }
  @HostBinding('class.loading') loading = true;
  private _src;

  constructor(private el: ElementRef) {}
  ngAfterViewInit() {
    const { nativeElement: node } = this.el;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.load();
          obs.unobserve(node);
        }
      });
    });
    obs.observe(node);
  }

  loaded(e) {
    this.loading = false;
  }
  private load() {
    if (!this.src) { return; }
    this.img.nativeElement.src = this.src;
  }
}
