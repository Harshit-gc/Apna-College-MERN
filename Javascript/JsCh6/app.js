// Functions in JS

// 1. Defining a function
function hello(){
    console.log("Hello");
}
// 2. Calling a function
hello();

// Function with Arguments
function printName(name, age){
    console.log(`${name}'s age is ${age}`);
}

printName("harsh",123);
printName(123);
printName("harsh");

// Return keyword
function sum(a, b){
    return a+b;
}

console.log(sum(3,5));

// Function Expressions
let sum1 = function(a, b){
    return a+b;
}

const hello1 = function(){
    console.log("hello");
}

// Higher Order Functions

// 1. Takes one or multiple functions as arguments
function multipleGreet(func, count){
    for(let i = 1 ; i <= count; i++){
        func();
    }
}

let greet = function(){
    console.log("Namaste");
}

multipleGreet(greet, 10);

// 2. Returns a function
function oddOrEven(request){
    if(request=="even"){
        return function(n){
            console.log(n%2 == 0);
        }
    }
    else if(request=="odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }
    }else{
        console.log("Wrong request");
    }
}

// Methods in JS
const calculator = {
    val: 3,
    add: function(a, b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    } 
}

// Method Shorthand
const calc = {
    add(a, b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    } 
}

