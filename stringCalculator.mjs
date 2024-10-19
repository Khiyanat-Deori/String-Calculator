export class StringCalculator {
    constructor() {
        this.callCount = 0; 
    } 

    add(numbers) {
        this.callCount++;
        if (numbers === "") return 0;

        let delimiter = /[\n,]/;
        if (numbers.startsWith('//')) {
          const delimiterEndIndex = numbers.indexOf('\n');
          delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
          numbers = numbers.substring(delimiterEndIndex + 1);
        }
      
        const numArray = numbers.split(delimiter).map(Number);
        const negatives = numArray.filter(num => num < 0);
        if (negatives.length > 0) {
            throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
        }
        return numArray.reduce((sum, num) => sum + num, 0);            
    }

    getCalledCount() {
        return this.callCount;
    }

    resetCalledCount() {
        this.callCount = 0;
    }
}
