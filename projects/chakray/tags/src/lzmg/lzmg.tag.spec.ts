import { Spec } from '@chakray/utils/testing';

import { CtLzmgTag as Tag } from './lzmg.tag';
import { Observer } from './observer';

Spec.tag(Tag, {}, (ref) => {
  let tag: Tag;
  beforeEach(() => {
    tag = ref.tag;
  });
  ref.prop('src', () => {
    describe('set to ""', () => {
      it('update ._src and .on', () => {
        tag.src = '';
        expect(tag.src).toBe('');
        expect(tag.on).toBe(false);
      });
    });
    describe('set to null', () => {
      it('update ._src and .on', () => {
        tag.src = null;
        expect(tag.src).toBe(null);
        expect(tag.on).toBe(false);
      });
    });
    describe('set to "somewhere"', () => {
      it('update ._src and .on', () => {
        tag.src = 'somewhere';
        expect(tag.src).toBe('somewhere');
        expect(tag.on).toBe(false);
      });
    });
  });
  ref.prop('visible', () => {
    describe('tag is on', () => {
      beforeEach(() => {
        tag.on = false;
      });
      describe('src is empty', () => {
        beforeEach(() => {
          tag.src = '';
        });
        it('set to true', () => {
          tag.visible = true;
          expect(tag.visible).toBe(true);
        });
        it('set to false', () => {
          tag.visible = false;
          expect(tag.visible).toBe(false);
        });
      });
      describe('src is not empty', () => {
        beforeEach(() => {
          tag.src = 'somewhere';
        });
        it('set to true', () => {
          tag.visible = true;
          expect(tag.visible).toBe(true);
          expect(tag.img.nativeElement.src.endsWith(tag.src)).toBe(true);
        });
        it('set to false', () => {
          tag.visible = false;
          expect(tag.visible).toBe(false);
          expect(tag.img.nativeElement.src.endsWith(tag.src)).toBe(false);
        });
      });
    });
  });
  ref.prop('loaded', () => {
    it('set on to true', () => {
      tag.loaded('');
      expect(tag.on).toBe(true);
    });
  });
  ref.prop('loaded', () => {
    it('set on to true', () => {
      tag.loaded('');
      expect(tag.on).toBe(true);
    });
  });
  ref.prop('ngAfterViewInit', () => {
    it('set visible to true', () => {
      tag.visible = false;
      tag.ngAfterViewInit();
      expect(tag.visible).toBe(false);
    });
  });
});
