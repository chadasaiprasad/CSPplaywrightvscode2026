// && = And operator: true if both operands are true
// || = Or operator: true if at least one operand is true
// ! = Not operator: inverts the truth value of the operand
let isAdult = true;
let hasID = false;
console.log(isAdult && hasID); // false (both must be true)
console.log(isAdult || hasID); // true (at least one is true)
console.log(!isAdult); // false (inverts true to false)
console.log(!hasID); // true (inverts false to true)
