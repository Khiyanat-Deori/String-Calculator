const { expect } = await import('chai');
const {StringCalculator} = await import('./stringCalculator.mjs');

describe('addition', () => {
  const calculator = new StringCalculator();
  it('should return 0 for an empty string', () => {
    expect(calculator.add("")).to.equal(0);
  });

  it('should return the number for single input', () => {
    expect(calculator.add("1")).to.equal(1);
  });
  
  it('should return the sum for two numbers', () => {
    expect(calculator.add("1,2")).to.equal(3);
  });

  it('should return the sum of an unknown amount of numbers', () => {
    expect(calculator.add("1,2,3,4,5")).to.equal(15);
  });

  it('should handle new lines between numbers', () => {
    expect(calculator.add("1\n2,3")).to.equal(6);
  });

  it('should support different delimiters', () => {
    expect(calculator.add("//:\n1:2")).to.equal(3);
  });

});