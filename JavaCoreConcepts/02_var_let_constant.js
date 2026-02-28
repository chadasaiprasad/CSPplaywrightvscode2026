//var, let, const
//var is function scoped, let and const are block scoped
//var can be re-declared and updated, let can be updated but not re-declared, const cannot be updated or re-declared
var a=10; //global scope
console.log(a);

//function- reusable code which can be called multiple times
//defining a function
function printHello(){
    console.log("Hello World");
    var a=20; //local scope
    console.log(a);
    if(true){
        var a=30; //re-declaring var in same scope
    console.log(a);
    }
    
    console.log("let a=" + a); //var is function scoped, it will take the last value assigned to it in the function scope
}
printHello(); //calling the function
console.log("let a=" + a);

