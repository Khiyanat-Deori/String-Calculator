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
    expect(calculator.add("//[***]\n1***2***3")).to.equal(6);
  });

  it('should throw an error for a negative number', () => {
    expect(() => calculator.add("1,-2,3")).to.throw("Negatives not allowed: -2");
  });

  it('should throw an error for multiple negative numbers', () => {
    expect(() => calculator.add("1,-2,-3")).to.throw("Negatives not allowed: -2, -3");
  });

  it('should count the number of times Add was called', () => {
    calculator.resetCalledCount(); 
    calculator.add("");
    calculator.add("1");
    expect(calculator.getCalledCount()).to.equal(2);
  });

  it('should ignore numbers greater than 1000', () => {
    expect(calculator.add("1001,2")).to.equal(2);
  });

  it('should allow multiple delimiters', () => {
    expect(calculator.add("//[*][%]\n1*2%3")).to.equal(6);
    expect(calculator.add("//[**][%%]\n1**2%%3")).to.equal(6);
  });

});