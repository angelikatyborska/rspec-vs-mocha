import '../test_helper'
import Bomb from '../../lib/bomb'

describe('Bomb', () => {
  let bomb;

  beforeEach(() => {
    bomb = new Bomb;
  });

  describe('#detonate', () => {
    it('kills the developer', () => {
      expect(() => { bomb.detonate(); }).to.throw('You are dead. No more coding.');
    });

    context('manually controlled time', () => {
      let clock;

      before(() => {
        clock = sinon.useFakeTimers();
      });

      after(() => {
        clock.restore();
      });

      it('kills the developer with a delay', () => {
        bomb.detonate(10);

        expect(() => { clock.tick(9) }).not.to.throw();
        expect(() => { clock.tick(1) }).to.throw('You are dead. No more coding.');
      });
    });
  });

  describe('#cutWire', () => {
    beforeEach(() => {
      bomb.theRightWire = sinon.stub();
      bomb.theRightWire.onCall(0).returns('red');
      bomb.theRightWire.onCall(1).returns('blue');
      bomb.theRightWire.returns('red');
      bomb.theRightWire.withArgs('foo').throws('bar');
    });

    it('disarms the bomb', () => {
      expect(bomb.cutWire('red')).to.be.true
      expect(bomb.cutWire('blue')).to.be.true
      expect(bomb.cutWire('red')).to.be.true
      expect(bomb.cutWire('red')).to.be.true
      expect(bomb.cutWire('red')).to.be.true
    });
  });

  describe('#getProductionDate', () => {
    context('in the future', () => {
      before(() => {
        timekeeper.travel(new Date(1));
      });

      after(() => {
        timekeeper.reset();
      });

      it('is old', () => {
        expect(bomb.getProductionDate().getFullYear()).to.equal(1970);
        expect(bomb).to.be.old;
      });
    });

    context('frozen in time', () => {
      before(() => {
        timekeeper.freeze(new Date(1));
      });

      after(() => {
        timekeeper.reset();
      });

      it('never gets old', () => {
        expect(bomb.getProductionDate()).to.deep.equal(new Date);
      });
    });
  });
});