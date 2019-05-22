import { Spec } from '@chakray/utils/testing';

import { CtIconTag as Tag } from './icon.tag';
import { iconSet } from './icon.set';
import { CtIconSetMod as Mod } from './icon.set.mod';

Spec.tag(Tag, {
  imports: [Mod],
  providers: [{ provide: iconSet, useValue: { _: { ff: 'aaa' }, item: '123' } }]
}, (ref) => {
  let tag: Tag;
  beforeEach(() => {
    tag = ref.tag;
  });
  ref.prop('key', () => {
    it('with prefixed name space', () => {
      tag.key = 'aaa.item';
      expect(tag.codeStr).toEqual('ģ');
      expect(tag.x).toEqual(false);
    });
    it('with no prefixed name space', () => {
      tag.key = 'item';
      expect(tag.codeStr).toEqual('ģ');
      expect(tag.x).toEqual(false);
    });
    it('with item not exists', () => {
      tag.key = 'noname.not-exist';
      expect(tag.x).toEqual(true);
    });
  });
});

// test for default token injection
Spec.tag(Tag, {
  imports: [Mod]
}, (ref) => { });
