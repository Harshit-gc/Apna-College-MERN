// String Methods 
// 1. trim method
let name = "  Aditya  ";
let naam = name.trim();
console.log(naam);

// 2. indexOf method
let str = "ILoveCoding";
console.log(str.indexOf("Love"));
console.log(str.indexOf('j'));
console.log(str.indexOf('o'));

// 3. Slice method
let msg = "apnacollege";
console.log(msg.slice(0,4));
console.log(msg.slice(4));
console.log(msg.slice(-2));

// 4. Replace method
let msg2 = "ILoveCoding";
console.log(msg2.replace("Love", "Do"));

// 5. Repeat method
let msg3 = "Mango";
console.log(msg3.repeat(4));

// Arrays In JS.
let students = ["aman", "rajat", "aditya"];
console.log(students);

// Array is of object data type in JS.
let info = ["aditya", 7.1, 70]; 
console.log(info);

// first index of the value which is on first index of array.
console.log(info[0][0]);

// Arrays are mutable in JS.
let fruits = ["mango", "apple", "litchi"];
console.log(fruits);
fruits[0] = "banana";
console.log(fruits);  

// Inserting element in array out of the length does not throws error in JS.
fruits[10] = "mango";
console.log(fruits); 

// Array Methods
// 1. Push
let cars = ["audi", "BMW", "maruti"];
console.log(cars);
cars.push("toyota");
console.log(cars);

// 2. Pop
cars.pop();
console.log(cars);

// 3. Unshift
cars.unshift("toyota");
console.log(cars);

// 4. Shift
cars.shift();
console.log(cars);

// 5. indexOf
console.log(cars.indexOf("maruti"));

// 6. concat
let primary = ["red", "blue"];
let secondary = ["orange", "pink"];
console.log(primary.concat(secondary));

// 7. reverse
// It changes the original array.
primary.reverse();
console.log(primary);

// 8. slice
let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
console.log(colors.slice(2));
console.log(colors.slice(2, 3));
console.log(colors.slice(-2));

// 9. splice
colors.splice(4);
console.log(colors);
colors.splice(0, 1);
console.log(colors);
colors.splice(1, 1, "black", "grey");
console.log(colors);