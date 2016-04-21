export default function (_chai, utils) {
  utils.addProperty(_chai.Assertion.prototype, 'old', function() {
    let condition,
      message,
      messageWhenNegated,
      expected,
      actual,
      subject = this._obj;

    if (utils.flag(this, 'negate')) {
      expected = 1996;
    }
    else {
      expected = 1976;
    }

    actual = subject.getProductionDate().getFullYear();
    condition = actual < expected;
    message = 'expected object to be produced before #{exp}, but it was produced in #{act}';
    messageWhenNegated = 'expected object not to be produced before #{exp}, but it was produced in #{act}';

    this.assert(
      condition,
      message,
      messageWhenNegated,
      expected,
      actual
    );
  });
};