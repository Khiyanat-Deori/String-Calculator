export class StringCalculator {
    add(numbers) {
        if (numbers === "") return 0;

        const numArray = numbers.split(",");

        if (numArray.length === 1) {
            return Number(numArray[0]);
        }

        if (numArray.length === 2) {
            return Number(numArray[0]) + Number(numArray[1]);
        }
        
    }
}
