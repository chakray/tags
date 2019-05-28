import { Spec } from '@chakray/utils/testing';

import { CtPopTag as Tag } from './pop.tag';

Spec.t(Tag, (ref) => {
  let tag: Tag;
  beforeEach(() => {
    tag = ref.tag;
  });
  ref.prop('actions', () => {
    describe('when null', () => {
      it('set actions to []', () => {
        tag.actions = null;
        expect(tag.actions).toEqual([]);
      });
    });
    describe('when some array', () => {
      it('set actions to [some]', () => {
        tag.actions = [{ name: 'some' } as any];
        expect(tag.actions.length).toEqual(1);
      });
    });
  });
  ref.prop('close', () => {
    it('set on to false', () => {
      tag.on = true;
      tag.close();
      expect(tag.on).toBeFalsy();
    });
  });
  ref.prop('open', () => {
    it('returns an observer', () => {
      tag.open().subscribe(k => {
        expect(k).toBeTruthy();
      });
      tag.open().subscribe(k => {
        expect(k).toBeTruthy();
      });
      tag.act('b');
    });
  });
});
