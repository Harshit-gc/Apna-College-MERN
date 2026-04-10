// this keyword in JS
const student = {
    math: 80,
    phy: 70,
    chem: 60,
    getAvg(){
        console.log(this);
        let avg = (this.math+this.chem+this.phy)/3;
        return avg;
    }
}

// Window object
let windowO = function(){
    console.log(this);
}

// try catch
console.log("Before try");
console.log("Before try");
try{
    console.log(a);
}catch(err){
    console.log("Error caught in try");
    console.log(err);
}
console.log("After try");
console.log("After try");

// Arrow Function
const sum = (a,b) => {
    return a+b;
}
// whent there is only one argument no need of round brackets
let square = n => {
    console.log(n*n);
}
 
// Implicit return in Arrow function
const mul = (a,b) => a*b;
const sub = (a,b) => (a-b);

// setTimeout function
console.log("Welcome");
setTimeout( ()=> {
    console.log("Hello");
}, 5000 );
console.log("Harsh");

// setInterval function
console.log("Welcome");
let id  = setInterval( ()=> {
    console.log("Hello");
}, 5000 );
console.log("Harsh");

// this with arrow function
const stu = {
    name: "aman",
    marks: 90,
    prop: this, // gloabl scope
    getName: function(){
        console.log(this); // function scope -> stu
        return this.name;
    },
    getMarks: () => {
        console.log(this); // Parent's scope -> window
        return this.marks;
    },
    getInfo1: function(){
        setTimeout(() => {
            console.log(this); // Parent's scope -> stu
        }, 2000);
    },
    getInfo2: function(){
        setTimeout( function() {
            console.log(this); // function scope -> setTimeout()
        }, 2000);
    }
};

