import { Spec } from '@chakray/utils/testing';

import { CtCallToActionTag as Tag } from './call-to-action.tag';

Spec.tag(Tag, {
}, (ref) => {
  let tag: Tag;
  beforeEach(() => {
    tag = ref.tag;
  });
  ref.prop('active', () => {
    it('is false', () => {
      expect(tag.active).toEqual(false);
    });
  });
  ref.prop('trigger', () => {
    it('is false when act is not push', () => {
      tag.act = 'sink';
      expect(tag.trigger).toEqual(false);
    });
    it('is true when act is push', () => {
      tag.act = 'push';
      expect(tag.trigger).toEqual(true);
    });
  });
  ref.fn('clk', () => {
    let spi;
    beforeAll(() => {
      spi = spyOn(tag.event, 'emit').and.callFake(() => {});
    });
    it('does nothing when frozen', () => {
      tag.frozen = true;
      tag.clk(1);
      expect(spi).not.toHaveBeenCalled();
    });
    it('emit event when not frozen', () => {
      tag.frozen = false;
      spi = spyOn(tag.event, 'emit').and.callFake(() => {});
      tag.clk(1);
      expect(spi).toHaveBeenCalled();
    });
  });
  ref.fn('ptu', () => {
    beforeEach(() => {
      jasmine.clock().uninstall();
      jasmine.clock().install();
      tag.active = true;
    });
    it('does nothing when frozen', () => {
      tag.frozen = true;
      tag.ptu(1);
      jasmine.clock().tick(200);
      expect(tag.active).toEqual(true);
    });
    it('does nothing when act is sink', () => {
      tag.frozen = false;
      tag.act = 'sink';
      tag.ptu(1);
      jasmine.clock().tick(200);
      expect(tag.active).toEqual(true);
    });
    it('set active to false', () => {
      tag.frozen = false;
      tag.act = 'push';
      tag.ptu(1);
      jasmine.clock().tick(200);
      expect(tag.active).toEqual(false);
    });
  });
  ref.fn('freeze', () => {
    it('set frozen to true', () => {
      tag.frozen = false;
      tag.freeze();
      expect(tag.frozen).toEqual(true);
    });
  });
  ref.fn('ptd', () => {
    it('does nothing if frozen', () => {
      tag.active = false;
      tag.frozen = true;
      tag.ptd(1);
      expect(tag.active).toEqual(false);
    });
    it('set active to true', () => {
      tag.active = false;
      tag.frozen = false;
      tag.ptd(1);
      expect(tag.active).toEqual(true);
    });
    it('toggle active if act is sink', () => {
      tag.act = 'sink';
      tag.active = true;
      tag.frozen = false;
      tag.ptd(1);
      expect(tag.active).toEqual(false);
    });
  });
});
