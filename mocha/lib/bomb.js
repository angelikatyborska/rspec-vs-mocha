export default class Bomb {
  constructor() {
    this.productionDate = new Date;
  }

  detonate(delay) {
    let goOff = () => {
      if (!this.disarmed) {
        throw 'You are dead. No more coding.';
      }
    };

    if (delay) {
      setTimeout(goOff, delay);
    }
    else {
      goOff();
    }
  }

  cutWire(color) {
    if (this.theRightWire() == color) {
      return this.disarmed = true;
    }
    else {
      this.detonate();
      return false;
    }
  }

  theRightWire() {
    return Math.random() < 0.5 ? 'blue' : 'red'
  }

  getProductionDate() {
    return this.productionDate;
  }
}