import { Injectable } from '@angular/core';

@Injectable()
export class Observer {
  visible = false;
  obs;
  on(ref, node) {
    this.obs = new IntersectionObserver(entries => {
      entries.forEach(({ isIntersecting }) => {
        ref.visible = isIntersecting;
        // obs.unobserve(node);
      });
    });
    this.obs.observe(node);
  }
}
