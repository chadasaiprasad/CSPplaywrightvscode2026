let count = 42;
let negative = -100;
let zero = 0;
//let octal = 0o52; // octal literal
//let hex=0x2A; // hexadecimal literal
//let binary=0b101010; // binary literal
//let pi=3.14;
//let exp=1.5e2;

//template literals
let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting); 

let math = `2 + 2 = ${2+2}`;
console.log(math);

console.log(null==undefined); // true
console.log(null===undefined); // false
console.log(null==0); // false
console.log(null==""); // false
let empty = "";
console.log(null==empty); // false
console.log(undefined==empty); // false
console.log(undefined==zero); // false

let isActive = true;
let isInactive = false;

console.log(5==5); // true
console.log(5=='5'); // true
console.log(5==='5'); // false