// forEach loop on arrays in js
let student = [1 , 2, 3, 4, 5];

student.forEach(function(el){
    console.log(el);
})

student.forEach((el) => {
    console.log(el);
})

student = [
    {
        name: "aditya",
        age: 23
    },
    {
        name: "harsh",
        age: 23
    }
];
student.forEach((el) => {
    console.log(el.name, el.age);
})

let print = function(el){
    console.log(el.name);
}
student.forEach(print);

// map on arrays
let num = [1, 2, 3, 4];
console.log("Numbers: ", num);
let square = num.map( (el) => el*el );
console.log("Square: ", square);

// filter on arrays
num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Numbers: ", num);
let even = num.filter( (el) => el%2 == 0 );
console.log("Even Num:", even);

// every in arrays
let ans = [2, 4, 6].every( (el) => el%2 == 0 );
console.log(ans);

// reduce in arrays
ans = num.reduce( (ans, el) => ans+el );
console.log(ans);

// Default Parameters
function func(a, b=2){
    return a+b;
}
console.log(func(1,4)); // output = 5
console.log(func(1)); // output = 3

// spread operator
console.log(...num);
console.log(..."hello");

// spread operator with object literals
let data = {
    name: "harsh",
    age: 23
};
console.log(data);
let dataCopy = {...data, gender: "male"};
console.log(dataCopy);

// spread operator on arrays and storing in object
num = [1, 2, 3, 4];
let numObject = {...num};
console.log(numObject);

// Rest Operator
function sum(...args){
    return args.reduce( (ans, el) => ans+el );
}
console.log(sum(1,2,3,4,5));

//Arguments(Collection) in function
function add(a, b, c, d){
    console.log(arguments);
}
add(1,2,3,4);

// Destructuring
let names = ["tony", "bruce", "steve", "peter"];
let [winner, runnerUp, ...others] = names;
console.log(winner);
console.log(runnerUp);
console.log(others);

// Destructuring in Objects

let stu = {
    name: "harsh",
    age: 23,
    username: "harsh@123",
    password: "abcd",
    // city: "pune" // If it is avialable then the value of city will be stored but city is not avialable then default value will be stored.
}

let {username: user, password: pass, city: place = "Mumbai"} = stu;
console.log(user);
console.log(pass);
console.log(place);

let stu1 = {
    a: "Harsh",
    b: 22
};
let stu2 = {
    c: "Aditya",
    d: 23
};

function mergeObjects(a , b){
    return {...a,...b};
}

let res = mergeObjects(stu1, stu2);
console.log(res);