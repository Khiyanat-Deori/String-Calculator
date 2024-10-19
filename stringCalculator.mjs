export class StringCalculator {
    add(numbers) {
        if (numbers === "") return 0;

        let delimiter = /[\n,]/;
        if (numbers.startsWith('//')) {
          const delimiterEndIndex = numbers.indexOf('\n');
          delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
          numbers = numbers.substring(delimiterEndIndex + 1);
        }
      
        const numArray = numbers.split(delimiter).map(Number);
        return numArray.reduce((sum, num) => sum + num, 0);            
    }
}
