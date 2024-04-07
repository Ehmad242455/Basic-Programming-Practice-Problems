function checkNumber(number: number): string {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

// Example usage:
let num = 0; // Change this to the number you want to check
let result = checkNumber(num);
console.log(`The number ${num} is ${result}.`);
