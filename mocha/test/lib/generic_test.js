import '../test_helper'

describe('Mocha', () => {
  // it('will not wait the callback', () => {
  //   // this test is unpredictable!
  //   setTimeout(() => {
  //     expect(false).to.be.true;
  //   }, 100);
  // });

  it('can wait for a callback', (done) => {
    setTimeout(() => { console.log('ding!'); done(); }, 100);
  });
});