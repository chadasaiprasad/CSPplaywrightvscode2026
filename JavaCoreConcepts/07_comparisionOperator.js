// = -> assignment operator
let a = 10;
let b = 5;
// == -> equality operator (loose equality)
console.log(a == b); // false
console.log(a == 10); // true
console.log(a == '10'); // true (type coercion occurs)
console.log(5=='5'); // true (type coercion occurs)
console.log(5===5); // true
console.log(5==='5'); // false (different types)
console.log(a != b); // true
console.log(a != 10); // false
console.log(a != '10'); // false (type coercion occurs)
console.log(5!='5'); // false (type coercion occurs)
console.log(5!==5); // false
// === -> strict equality operator (no type coercion)
console.log(a === 10); // true
console.log(a === '10'); // false (different types)
console.log(null == undefined); // true (both are considered equal in loose equality)
console.log(null === undefined); // false (different types)
console.log(0 == false); // true (0 is falsy)
console.log(0 === false); // false (different types)
console.log('' == false); // true (empty string is falsy)
console.log('' === false); // false (different types)
