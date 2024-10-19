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
            const delimiterPart = numbers.substring(2, delimiterEndIndex);
        
            if (delimiterPart.startsWith('[') && delimiterPart.endsWith(']')) {
                const customDelimiters = delimiterPart.split(/[\[\]]+/).filter(Boolean);
                const escapedDelimiters = customDelimiters.map(delim => delim.replace(/[-\/\\^$.*+?()[\]{}|]/g, '\\$&'));
                delimiter = new RegExp(escapedDelimiters.join('|')); 
            } else {
                delimiter = new RegExp(delimiterPart.replace(/[-\/\\^$.*+?()[\]{}|]/g, '\\$&'));
            }
        
            numbers = numbers.substring(delimiterEndIndex + 1);
        }
        
      
        const numArray = numbers.split(delimiter).map(Number).filter(num=>num<=1000);
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
