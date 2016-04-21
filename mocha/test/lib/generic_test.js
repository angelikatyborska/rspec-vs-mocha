import '../test_helper'

describe('Mocha', () => {
  it('can wait for a callback', (done) => {
    setTimeout(() => {
      expect(true).to.be.true;
      done();
      expect(false).to.be.true;
    }, 1000);
  });
});