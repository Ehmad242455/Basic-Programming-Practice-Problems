"use strict";
function assignGrade(score) {
    if (score >= 90) {
        return 'A';
    }
    else if (score >= 80) {
        return 'B';
    }
    else if (score >= 70) {
        return 'C';
    }
    else if (score >= 60) {
        return 'D';
    }
    else {
        return 'F';
    }
}
// Example usage:
const score = 34;
const grade = assignGrade(score);
console.log(`Score: ${score}, Grade: ${grade}`);
