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
});