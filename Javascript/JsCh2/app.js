console.log("Hello World");
console.log("Harshit GC");

// Template Literals
let a = 10;
let b = 5;
console.log(`Price is: ${a+b} Rupees.`);
//Without template literals
console.log("Proce is:", (a+b) ,"Rupees.");

// Conditional Statements

// if statement
let age = 23;
if(age >= 18){
    console.log("You can Vote.");
}

// else if statement
age = 14;
if(age >= 18){
    console.log("You can Vote.");
}
else if(age < 18){
    console.log("You cannot Vote.")
}

// else statement
let color = "red";
if(color === "red"){
    console.log("Stop");
}else if (color === "yellow"){
    console.log("Slow down");
}else if (color === "green"){
    console.log("Go");
}else{
    console.log("Invalid Signal.");
}

// Switch Statements
color = "yellow";
switch(color){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow down");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Signal.")
}

// Alert in JS
alert("Something went wrong. Please Try Again..");

// Errors & Warning
console.error("Error occured.");
console.warn("Warning");

// Prompts in JS
let name = prompt("Enter Your Name: ");
console.log(name);