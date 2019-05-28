import { Injector } from '@angular/core';
import { Spec } from '@chakray/utils/testing';

import { IconSetManager as Pdr } from './icon-set.manager';
import { iconSet } from './icon.set';
import { Head } from './head';

Spec.pdr(Pdr, {
  providers: [Injector, Head, {
    provide: iconSet, useValue: { _: { ff: 'mock' }, a: 'a' }, multi: true
  }]
}, (ref) => {
  let tag: Pdr;
  beforeEach(() => {
    tag = ref.pdr;
  });
  ref.prop('inject', () => {
    it('init data', () => {
      tag.inject({ _: { ff: 'aff' }, a: 'a' });
      expect('aff' in tag.ref).toBeTruthy();
    });
  });
});
