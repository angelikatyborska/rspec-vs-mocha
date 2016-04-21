import '../test_helper'
import Bomb from '../../lib/bomb'

describe('RedButton', () => {
  let RedButton, button, detonate;

  before(() => {
    detonate = sinon.spy();
    class SafeBomb extends Bomb { 
      constructor() { super(); this.detonate = detonate } 
    }
    RedButton = proxyquire(
      '../lib/red_button',
      { './bomb': { default: SafeBomb } }
    ).default;
  });

  beforeEach(() => {
    button = new RedButton;
  });

  afterEach(() => {
    detonate.reset();
  });

  describe('#press', () => {
    it('can be pressed', () => {
      expect(() => { button.press(); }).not.to.throw();
    });

    it('detonates a bomb', () => {
      button.press();
      expect(detonate).to.have.been.calledWith(1000);
      expect(detonate).to.have.been.calledOnce;
    });
  });
});