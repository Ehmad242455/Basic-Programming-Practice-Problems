function printMultiplicationTable(number: number): void {
    console.log(`Multiplication Table for ${number}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} × ${i} = ${number * i}`);
    }
}

// Example usage:
const givenNumber = 10; // Change this to the number for which you want the multiplication table
printMultiplicationTable(givenNumber);
