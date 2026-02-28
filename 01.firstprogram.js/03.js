console.log(process.platform);
console.log(process.arch);
console.log(process.version);
console.log("hello");
console.log(typeof NaN);
let x=10;
console.log(x);


 const arr = [1, 2, 3]; 
 arr.push(4); 
 console.log(arr); 

 console.log(5 === '5');
 console.log(5 == '5');
 console.log(2 ** 3);   // Exponentiation operator
 console.log(3**3);
 console.log(4 ** 4); 

console.log('5' + 3); // Output: '53' (string concatenation)
console.log('5' - 3); // Output: 2 (string '5' is coerced to number 5)
console.log(true + true); // Output: 2 (true is coerced to 1, so 1 + 1 = 2)
console.log(false + true); // Output: 1 (false is coerced to 0, so 0 + 1 = 1)
console.log(0 || 'hello'); // Output: 'hello' (0 is falsy, so it returns the second operand)
console.log(1 && 'world'); // Output: 'world' (1 is truthy, so it returns the second operand)
console.log(1 || 'hello'); // Output: 1 (1 is truthy, so it returns the first operand)
console.log(0 && 'world'); // Output: 0 (0 is falsy, so it returns the first operand)
console.log(0 ?? 'hello'); // Output: 0 (0 is not null or undefined, so it returns the first operand)
console.log(10 % 3); // Output: 1 (10 divided by 3 leaves a remainder of 1)

let a = 5; 
let b = a++; 
console.log(a, b);

if ('') // An empty string is falsy
    { 
        console.log('yes');
     } 
else { 
    console.log('no');
 }

 console.log(Boolean([]));

 