// AND gate
function AND_gate(A: true, B: true, C: true): boolean {
    return A && B && C;
}

// OR gate
function OR_gate(A: true, B: true, C: true): boolean {
    return A || B || C;
}

// NOT gate (for each variable individually)
function NOT_gate(variable: true): boolean {
    return !variable;
}

// Example usage:
const result_AND = AND_gate(true, true, true); // Example usage of AND gate
const result_OR = OR_gate(true, true, true);   // Example usage of OR gate
const result_NOT = NOT_gate(true);             // Example usage of NOT gate
console.log("Result of AND gate:", result_AND);
console.log("Result of OR gate:", result_OR);
console.log("Result of NOT gate:", result_NOT);
