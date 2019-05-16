import { redirectTo } from './app.routing';

describe('redirectTo', () => {
  it('should be setup', () => {
    expect(redirectTo).toEqual('/setup');
  });
});
