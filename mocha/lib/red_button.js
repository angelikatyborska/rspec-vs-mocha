import Bomb from './bomb'

export default class RedButton {
  press() {
    new Bomb().detonate(1000);
  }
}