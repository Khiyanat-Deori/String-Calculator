const { expect } = await import('chai');
const {StringCalculator} = await import('./stringCalculator.mjs');

describe('addition', () => {
  const calculator = new StringCalculator();
  it('should return 0 for an empty string', () => {
    expect(calculator.add("")).to.equal(0);
  });
});